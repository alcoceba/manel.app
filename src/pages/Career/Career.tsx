import './Career.scss';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Card from '../../components/Card/Card';
import Headline from '../../components/Headline/Headline';
import Link from '../../components/Link/Link';

function Career() {
  return (
    <div className="Career">
      <Headline title="My Career" />
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Career' }]} />

      <section className="Career__section">
        <h2>Professional Journey</h2>

        <div className="Career__timeline">
          <Card>
            <div className="Career__header">
              <h3>Frontend Tech Lead</h3>
              <span className="Career__date">2022 - Present</span>
            </div>
            <p className="Career__company">Current Position</p>
            <ul>
              <li>Leading frontend architecture and best practices</li>
              <li>Mentoring junior and mid-level developers</li>
              <li>Building scalable React and Next.js applications</li>
              <li>Code review and technical standards enforcement</li>
            </ul>
          </Card>

          <Card>
            <div className="Career__header">
              <h3>Senior Frontend Developer</h3>
              <span className="Career__date">2018 - 2022</span>
            </div>
            <p className="Career__company">Previous Role</p>
            <ul>
              <li>Developed complex web applications with React and Vue.js</li>
              <li>
                Implemented responsive designs and mobile-first strategies
              </li>
              <li>Optimized performance and improved user experience</li>
              <li>Collaborated with design and backend teams</li>
            </ul>
          </Card>

          <Card>
            <div className="Career__header">
              <h3>Full Stack Developer</h3>
              <span className="Career__date">2012 - 2018</span>
            </div>
            <p className="Career__company">Early Career</p>
            <ul>
              <li>Built full-stack web applications with JavaScript and PHP</li>
              <li>Worked on both frontend and backend development</li>
              <li>Database design and management with MySQL and PostgreSQL</li>
              <li>RESTful API development and integration</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="Career__section">
        <h2>Key Achievements</h2>
        <ul className="Career__achievements">
          <li>🚀 Led migration of legacy applications to modern React stack</li>
          <li>
            📈 Improved application performance by 60% through optimization
          </li>
          <li>👥 Built and mentored a team of 5+ frontend engineers</li>
          <li>🎯 Implemented component library used across 15+ projects</li>
          <li>
            ✨ Created design system improving consistency and productivity
          </li>
        </ul>
      </section>

      <section className="Career__section">
        <h2>Education & Certifications</h2>
        <ul>
          <li>Degree in Computer Science</li>
          <li>Multiple professional certifications in web development</li>
          <li>Continuous learning through courses and workshops</li>
        </ul>
      </section>

      <section className="Career__section">
        <div>
          <Link title="Go back" url="/">
            Go back
          </Link>
          <Link
            title="View my LinkedIn profile"
            url="https://www.linkedin.com/in/alcoceba/"
            target="_blank"
          >
            View LinkedIn
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Career;
