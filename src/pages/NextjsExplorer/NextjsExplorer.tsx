import './NextjsExplorer.scss';

import Badge from '../../components/Badge/Badge';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Headline from '../../components/Headline/Headline';
import { Icons } from '../../components/Icon';
import Link from '../../components/Link/Link';

function NextjsExplorer() {
  return (
    <div className="NextjsExplorer">
      <Headline title="Next.js Explorer" />
      <Breadcrumbs
        items={[{ label: 'Home', url: '/' }, { label: 'Projects' }]}
      />

      <section className="NextjsExplorer__section">
        <h3>Browser Extension for Next.js Developers</h3>

        <p className="NextjsExplorer__intro">
          A browser extension for Chrome and Firefox that helps developers
          explore and visualize Next.js applications.
        </p>
        <p>
          Quickly identify Next.js projects, explore static properties,
          visualize bundle structure, and support both App Router and Pages
          Router.
        </p>

        <h3>Built With</h3>
        <div className="NextjsExplorer__badges">
          <Badge
            icon={Icons.React}
            text="React"
            color="var(--react-color)"
            iconColor="var(--react-icon-color)"
          />
          <Badge icon={Icons.TypeScript} text="TypeScript" color="var(--typescript-color)" />
          <Badge icon={Icons.Jest} text="Jest" color="var(--jest-color)" />
          <Badge icon={Icons.Storybook} text="Storybook" color="var(--storybook-color)" />
        </div>

        <h3>Recognition</h3>
        <div className="NextjsExplorer__stats">
          <span>⭐ 5.0 rating</span>
          <span>👥 6,000+ users</span>
          <span>✅ Featured extension</span>
        </div>

        <h3>Links</h3>
        <div className="NextjsExplorer__checkouts">
          <Badge
            icon={Icons.Chrome}
            text="Chrome Web Store"
            url="https://chromewebstore.google.com/detail/nextjs-explorer-nextjs-ap/iiekmbomdcmddchlplbdlkkpdgncgpdg"
            target="_blank"
            title="Get it on Chrome Web Store"
            color="var(--chrome-color)"
            size="lg"
          />
          <Badge
            icon={Icons.Firefox}
            text="Firefox Add-ons"
            url="https://addons.mozilla.org/en-US/firefox/addon/nextjs/"
            target="_blank"
            title="Get it on Firefox Add-ons"
            color="var(--firefox-color)"
            size="lg"
          />
          <Badge
            icon={Icons.GitHub}
            text="GitHub Repository"
            url="https://github.com/alcoceba/next.js-explorer"
            target="_blank"
            title="View source on GitHub"
            color="var(--github-color)"
            iconColor="var(--github-icon-color)"
            size="lg"
          />
        </div>

        <Link title="Go back" url="/">
          Go back
        </Link>
      </section>
    </div>
  );
}

export default NextjsExplorer;
