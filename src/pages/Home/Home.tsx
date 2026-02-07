import './Home.scss';

import Badge from '../../components/Badge/Badge';
import Headline from '../../components/Headline/Headline';
import { Icons } from '../../components/Icon';
import Link from '../../components/Link/Link';

function Home() {
  return (
    <div className="Home">
      <header className="Home__top">
        <Headline title="Hi 🙋‍♂️ I'm Manel" />
      </header>

      <section className="Home__section">
        <div className="Home__badges">
          <Badge
            icon={Icons.LinkedIn}
            text="LinkedIn"
            url="https://www.linkedin.com/in/alcoceba/"
            target="_blank"
            title="Go to LinkedIn / alcoceba"
            color="var(--linkedin-color)"
            size="lg"
            hideText
            showTooltip
          />
          <Badge
            icon={Icons.GitHub}
            text="GitHub"
            url="https://github.com/alcoceba/"
            target="_blank"
            title="Go to GitHub / alcoceba"
            color="var(--github-color)"
            iconColor="var(--github-icon-color)"
            size="lg"
            hideText
            showTooltip
          />
          <Badge
            icon={Icons.DailyDev}
            text="daily.dev"
            url="https://app.daily.dev/alcoceba/"
            target="_blank"
            title="Go to daily.dev / alcoceba"
            color="var(--daily-dev-color)"
            size="lg"
            hideText
            showTooltip
          />
        </div>
      </section>

      <section className="Home__section">
        <p>
          I'm a <strong>Software Engineer</strong> with 14+ years of experience
          building web applications.
        </p>
      </section>

      <section className="Home__section">
        <div className="Home__skills">
          <div className="Home__skillsList">
            <Badge
              icon={Icons.React}
              text="React"
              color="var(--react-color)"
              iconColor="var(--react-icon-color)"
            />
            <Badge icon={Icons.Nextjs} text="Next.js" color="var(--nextjs-color)" />
            <Badge icon={Icons.TypeScript} text="TypeScript" color="var(--typescript-color)" />
            <Badge
              icon={Icons.JavaScript}
              text="JavaScript"
              color="var(--javascript-color)"
              iconColor="var(--javascript-icon-color)"
            />
            <Badge icon={Icons.Sass} text="Sass/CSS" color="var(--sass-color)" />
            <Badge icon={Icons.Html} text="HTML5" color="var(--html-color)" />
            <Badge
              icon={Icons.Nodejs}
              text="Node.js"
              color="var(--nodejs-color)"
              iconColor="var(--nodejs-icon-color)"
            />
            <Badge icon={Icons.Php} text="PHP" color="var(--php-color)" />
            <Badge
              icon={Icons.Responsive}
              text="Responsive Design"
              color="var(--responsive-color)"
            />
            <Badge
              icon={Icons.Component}
              text="Component-Driven Dev"
              color="var(--component-color)"
            />
            <Badge icon={Icons.Code} text="Clean Code" color="var(--code-color)" />
          </div>
        </div>
      </section>

      <section className="Home__section">
        <p>
          ☕️ I'm open to connect and share ideas, help with challenges, or just
          talk about what you're working on.
        </p>
        <br />
        <p>
          <Link
            title="Want to know how can I help you?"
            url="https://www.linkedin.com/in/alcoceba"
          >
            Click here
          </Link>{' '}
          to get to know me better.
        </p>
      </section>
    </div>
  );
}

export default Home;
