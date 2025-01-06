import './Home.scss';

import { Icons } from '../../components/Icon';
import Link from '../../components/Link/Link';
import LinkGroup from '../../components/LinkGroup/LinkGroup';

function Home() {
  return (
    <div className="App">
      <header className="App__top">
        <div className="App__top__content">
          <h1>I'm Manel</h1>
          <p>Front-end Engineer</p>
        </div>
      </header>

      <div className="App__center">
        <p>
          Sunny days <span>&#9788;</span> make me happy.
        </p>
      </div>

      <div className="App__bottom">
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

          <Link
            icon={Icons.StackOverflow}
            title="Go to Stack Overflow / alcoceba"
            url="https://stackoverflow.com/users/1398978/alcoceba/"
            target="_blank"
            hoverEffect="scale"
          >
            StackOverflow
          </Link>
        </LinkGroup>

        <div className="App__center">
          <p>
            <Link title="Go to Stack Overflow / alcoceba" url="/">
              Click here
            </Link>{' '}
            to get to know me better.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
