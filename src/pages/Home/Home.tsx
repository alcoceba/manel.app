import { useState } from 'react';
import './Home.scss';

import { ProfileCard } from '../../components/ProfileCard/ProfileCard';
import { Terminal } from '../../components/Terminal/Terminal';
import { TerminalLinks } from '../../components/TerminalLinks/TerminalLinks';
import { TerminalPrompt } from '../../components/TerminalPrompt/TerminalPrompt';
import {
  DEFAULT_LINKS,
  useTerminalSession,
} from '../../hooks/useTerminalSession';

function Home() {
  const [isTerminalMinimizedOrClosed, setIsTerminalMinimizedOrClosed] =
    useState(false);
  const {
    catCommand,
    message,
    fetchCommand,
    isInitializing,
    initSpinnerFrame,
    isCatLineVisible,
    catChars,
    catEnd,
    isMessageVisible,
    fetchChars,
    isFetchLineVisible,
    isFetchDone,
    isSpinnerVisible,
    spinnerFrame,
    isResultsVisible,
    isFinalPromptVisible,
    ticks,
    restartSession,
  } = useTerminalSession();

  const statusContent = (
    <>
      <span>View the source code on </span>
      <a
        className="Home__statusLink"
        href="https://github.com/alcoceba/manel.app"
        target="_blank"
        rel="noopener noreferrer"
        title="Go to GitHub repository"
      >
        GitHub
      </a>
      <span className="Home__statusDivider">•</span>
      <span>Last updated Oct 2026</span>
    </>
  );

  return (
    <div className="Home">
      <section className="Home__section">
        <div
          className={`Home__egg${isTerminalMinimizedOrClosed ? ' Home__egg--hidden' : ''}`}
          aria-hidden="true"
          data-testid="easter-egg"
        >
          hi! 👋
        </div>

        <Terminal
          title="manel@dev: ~"
          statusContent={statusContent}
          onClose={() => setIsTerminalMinimizedOrClosed(true)}
          onMinimize={() => setIsTerminalMinimizedOrClosed(true)}
          onRestore={() => setIsTerminalMinimizedOrClosed(false)}
          onRelaunch={() => {
            setIsTerminalMinimizedOrClosed(false);
            restartSession();
          }}
        >
          <header className="Home__header">
            <ProfileCard tag="[ whoami ]" title="Hi 👾 I'm Manel">
              <p className="Home__intro">
                I'm a <strong>Software Engineer</strong> with 14+ years of
                experience building web applications.
              </p>
            </ProfileCard>
          </header>

          <hr className="Home__divider" aria-hidden="true" />

          {isInitializing && (
            <div className="Home__spinner" aria-live="polite">
              <span className="Home__spinnerFrame">{initSpinnerFrame}</span>
              <span className="Home__spinnerLabel">initializing...</span>
            </div>
          )}

          {isCatLineVisible && (
            <div className="Home__line">
              <TerminalPrompt />
              <span>{catCommand.slice(0, catChars)}</span>
              {ticks < catEnd && <span className="TerminalCursor" />}
            </div>
          )}

          {isMessageVisible && (
            <>
              <div className="Home__output">{message}</div>

              {isFetchLineVisible && (
                <div className="Home__line">
                  <TerminalPrompt />
                  <span>{fetchCommand.slice(0, fetchChars)}</span>
                  {!isFetchDone && <span className="TerminalCursor" />}
                </div>
              )}

              {isSpinnerVisible && (
                <div className="Home__spinner" aria-live="polite">
                  <span className="Home__spinnerFrame">{spinnerFrame}</span>
                  <span className="Home__spinnerLabel">connecting...</span>
                </div>
              )}

              {isResultsVisible && <TerminalLinks links={DEFAULT_LINKS} />}

              {isFinalPromptVisible && (
                <div className="Home__line Home__finalPrompt">
                  <TerminalPrompt />
                  <span className="TerminalCursor" />
                </div>
              )}
            </>
          )}
        </Terminal>
      </section>
    </div>
  );
}

export default Home;
