import './About.scss';

import Headline from '../../components/Headline/Headline';
import Link from '../../components/Link/Link';
import LinkGroup from '../../components/LinkGroup/LinkGroup';

function About() {
  return (
    <div className="About">
      <Headline title="About me" />

      <section className="About__section">
        <h2>
          Hi,
          <br />
          I'm Manel 🙋‍♂️
        </h2>

        <ul>
          <li>
            👨‍💻 Frontend <u>Tech Lead</u> & Software Engineer focused on{' '}
            <u>React</u>, Next.js, and modern web tools.
          </li>
          <li>
            💚 I care about <u>clean code</u> and building{' '}
            <u>intuitive user interfaces</u> that live on the Internet.
          </li>

          <li>
            🚀 Always curious and eager to learn — I enjoy{' '}
            <u>discovering new things</u> and improving how I do my job.
          </li>
          <li>
            🏃‍♂️ I like sports and nature — taking breaks helps me stay{' '}
            <u>creative and focused</u>.
          </li>
          <li>
            ☕️ <u>Open to connect</u> and <u>share ideas</u>, help with
            challenges, or just talk about what you're working on.
          </li>
        </ul>

        <LinkGroup>
          <Link title="Go back" url="/">
            Go back
          </Link>
          <Link
            title="Go to linkedin / alcoceba"
            url="https://www.linkedin.com/in/alcoceba/"
            target="_blank"
          >
            Contact me!
          </Link>
        </LinkGroup>
      </section>
    </div>
  );
}

export default About;
