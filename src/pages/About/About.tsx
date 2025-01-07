import './About.scss';

import Headline from '../../components/Headline/Headline';
import Link from '../../components/Link/Link';

function About() {
  return (
    <div className="About">
      <Headline title="About me" />

      <section className="About__section">
        <h2>Hi, I'm Manel Alcoceba 🙋‍♂️</h2>

        <p>
          I am a <u>Software Engineer</u> with a strong focus on{' '}
          <u>front-end technologies</u>, specializing in React, Next.js, and
          modern web frameworks and tools.
        </p>
        <p>
          Over the years, I've embraced a <u>tech lead</u> role in my current
          company, contributing to the development of scalable and efficient
          applications while fostering collaboration and growth within the team.
        </p>
        <p>
          Passionate about innovation, continuous learning, and committed to
          delivering <u>high-quality work</u>, I am always eager to take on <u>new
          challenges</u> and explore <u>emerging technologies</u>. 🚀
        </p>

        <p>
          <Link title="Go home" url="/">
            Go back
          </Link>
        </p>
      </section>
    </div>
  );
}

export default About;
