import Link, { LinkProps } from '../Link/Link';

import { IconProps } from '../Icon/Icon';

interface LinkIconProps extends LinkProps {
  icon: React.FC<IconProps>;
}

const LinkIcon: React.FC<LinkIconProps> = ({ icon: Icon, ...props }) => {
  return (
    <Link {...props}>
      <Icon size={30} />
    </Link>
  );
};

export default LinkIcon;
