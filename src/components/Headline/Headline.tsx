import './Headline.scss';

interface HeadlineProps {
  title: string;
  subtitle?: string;
}

const Headline: React.FC<HeadlineProps> = ({ title, subtitle }) => (
  <div className="Headline">
    <div className="Headline__inner">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </div>
);

export default Headline;
