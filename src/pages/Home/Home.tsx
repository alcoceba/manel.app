import './Home.scss';

import { Icons } from '../../components/Icon';
import LinkGroup from '../../components/LinkGroup/LinkGroup';
import LinkIcon from '../../components/LinkIcon/LinkIcon';

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
        <LinkGroup>
          <LinkIcon
            icon={Icons.LinkedIn}
            title="Go to Linked In / alcoceba"
            url="https://www.linkedin.com/in/alcoceba/"
            target="_blank"
            hoverEffect="scale"
          />

          <LinkIcon
            icon={Icons.GitHub}
            title="Go to github / alcoceba"
            url="https://github.com/alcoceba/"
            target="_blank"
            hoverEffect="scale"
          />

          <LinkIcon
            icon={Icons.DailyDev}
            title="Go to daily.dev / alcoceba"
            url="https://app.daily.dev/alcoceba/"
            target="_blank"
            hoverEffect="scale"
          />

          <LinkIcon
            icon={Icons.StackOverflow}
            title="Go to stackoverflow / alcoceba"
            url="https://stackoverflow.com/users/1398978/alcoceba/"
            target="_blank"
            hoverEffect="scale"
          />
        </LinkGroup>
      </div>
    </div>
  );
}

export default Home;
