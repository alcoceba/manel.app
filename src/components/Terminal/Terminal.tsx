import type { ReactNode } from 'react';
import './Terminal.scss';
import { TerminalBar } from './TerminalBar';
import { TerminalNotice } from './TerminalNotice';
import { TerminalResizeGrip } from './TerminalResizeGrip';
import {
  useTerminalWindow,
  type UseTerminalWindowOptions,
} from './hooks/useTerminalWindow';

export interface TerminalProps extends UseTerminalWindowOptions {
  title?: string;
  children: ReactNode;
  statusContent?: ReactNode;
}

export function Terminal({
  title = 'manel@dev: ~',
  children,
  statusContent,
  ...windowOptions
}: TerminalProps) {
  const {
    isClosed,
    isMinimized,
    isMaximized,
    containerRef,
    containerClasses,
    containerStyle,
    trafficLightProps,
    barProps,
    gripProps,
    handleReopen,
    handleRestore,
  } = useTerminalWindow(windowOptions);

  if (isClosed) {
    return (
      <div className="Terminal Terminal--closed" data-testid="terminal-closed">
        <TerminalNotice
          message="Terminal session closed."
          buttonLabel="[ Relaunch Terminal ]"
          buttonTestId="terminal-reopen-button"
          onAction={handleReopen}
        />
      </div>
    );
  }

  if (isMinimized) {
    return (
      <div
        className="Terminal Terminal--minimized"
        data-testid="terminal-minimized"
      >
        <TerminalNotice
          message="Terminal minimized."
          buttonLabel="[ Restore Terminal ]"
          buttonTestId="terminal-restore-button"
          onAction={handleRestore}
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      data-testid="terminal-container"
      style={containerStyle}
    >
      <TerminalBar
        title={title}
        trafficLights={trafficLightProps}
        barProps={barProps}
      />

      <div className="Terminal__body">{children}</div>

      {statusContent && (
        <footer className="Terminal__footer">
          <div className="Terminal__status">{statusContent}</div>
        </footer>
      )}

      {!isMaximized && <TerminalResizeGrip gripProps={gripProps} />}
    </div>
  );
}

export default Terminal;
