import './Home.scss';

import Badge from '../../components/Badge/Badge';
import Headline from '../../components/Headline/Headline';
import { Icons } from '../../components/Icon';

function Home() {
  return (
    <div className="Home">
      <header className="Home__top">
        <Headline title="Hi 👾 I'm Manel" />
      </header>

      <section className="Home__section Home__section--badges">
        <div className="Home__badges">
          <Badge
            icon={Icons.LinkedIn}
            text="LinkedIn"
            url="https://www.linkedin.com/in/alcoceba/"
            target="_blank"
            title="Go to LinkedIn / alcoceba"
            color="var(--linkedin-color)"
            variant="social"
          />
          <Badge
            icon={Icons.GitHub}
            text="GitHub"
            url="https://github.com/alcoceba/"
            target="_blank"
            title="Go to GitHub / alcoceba"
            color="var(--github-color)"
            iconColor="var(--github-icon-color)"
            variant="social"
          />
          <Badge
            icon={Icons.DailyDev}
            text="daily.dev"
            url="https://app.daily.dev/alcoceba/"
            target="_blank"
            title="Go to daily.dev / alcoceba"
            color="var(--daily-dev-color)"
            variant="social"
          />
        </div>
      </section>

      <section className="Home__section">
        <p className="Home__intro">
          I'm a <strong>Software Engineer</strong> with 14+ years of experience
          building web applications.
        </p>
      </section>

      <section className="Home__section">
        <p>
          ☕️ I'm open to connect and share ideas, or just talk about what you're
          working on.
        </p>
        <p>
          <a
            className="Home__link"
            href="https://www.linkedin.com/in/alcoceba/"
            target="_blank"
            rel="noopener noreferrer"
            title="Want to know how can I help you?"
          >
            Click here
          </a>{' '}
          to get to know me better.
          <span className="TerminalCursor" />
        </p>
      </section>
    </div>
  );
}

export default Home;
