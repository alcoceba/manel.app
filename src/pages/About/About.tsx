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
          I'm Manel Alcoceba 🙋‍♂️
        </h2>

        <p>
          I am a <u>Software Engineer</u> with a strong focus on{' '}
          <u>front-end 🦄 technologies</u>, specializing in React, Next.js,
          Node.js and other modern web tools, emphasizing development{' '}
          <u>best practices</u>.
        </p>
        <p>
          Over the years, I've embraced a front-end <u>tech lead</u> role in my
          current company, contributing to the development of scalable and
          efficient applications.
        </p>
        <p>
          Passionate about innovation, continuous learning, and committed to
          delivering <u>high-quality work</u>, I am always eager to take on{' '}
          <u>new challenges</u> and explore <u>emerging technologies</u>. 🚀
        </p>

        <br />

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
