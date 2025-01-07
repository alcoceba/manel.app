import './Headline.scss';

export interface HeadlineProps extends React.SVGProps<SVGSVGElement> {
  title: string;
  subtitle?: string;
}

const Headline: React.FC<HeadlineProps> = ({ title, subtitle }) => (
  <div className="Headline">
    <div className="Headline__content">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>
);

export default Headline;
