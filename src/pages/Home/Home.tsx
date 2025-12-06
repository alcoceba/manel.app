import './Home.scss';

import Headline from '../../components/Headline/Headline';
import { Icons } from '../../components/Icon';
import Link from '../../components/Link/Link';
import LinkGroup from '../../components/LinkGroup/LinkGroup';

function Home() {
  return (
    <div className="Home">
      <header className="Home__top">
        <Headline title="I'm Manel" subtitle="Front-end Engineer" />
      </header>

      <section className="Home__section">
        <LinkGroup type="vertical">
          <Link
            icon={Icons.LinkedIn}
            title="Go to Linked In / alcoceba"
            url="https://www.linkedin.com/in/alcoceba/"
            target="_blank"
            hoverEffect="scale"
          >
            LinkedIn
          </Link>

          <Link
            icon={Icons.GitHub}
            title="Go to GitHub / alcoceba"
            url="https://github.com/alcoceba/"
            target="_blank"
            hoverEffect="scale"
          >
            GitHub
          </Link>

          <Link
            icon={Icons.DailyDev}
            title="Go to daily.dev / alcoceba"
            url="https://app.daily.dev/alcoceba/"
            target="_blank"
            hoverEffect="scale"
          >
            daily.dev
          </Link>
        </LinkGroup>
      </section>

      <section className="Home__section">
        <p>
          <Link title="Want to know how can I help you?" url="https://www.linkedin.com/in/alcoceba">
            Click here
          </Link>{' '}
          to get to know me better.
        </p>
      </section>
    </div>
  );
}

export default Home;
