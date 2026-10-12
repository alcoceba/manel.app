import type { ReactNode } from 'react';
import './ProfileCard.scss';

export interface ProfileCardProps {
  tag?: string;
  title?: string;
  children?: ReactNode;
}

export function ProfileCard({
  tag = '[ whoami ]',
  title = "Hi 👾 I'm Manel",
  children,
}: ProfileCardProps) {
  return (
    <div className="ProfileCard" data-testid="profile-card">
      {tag && (
        <span className="ProfileCard__tag" aria-hidden="true">
          {tag}
        </span>
      )}
      <h1 className="ProfileCard__title">{title}</h1>
      {children && <div className="ProfileCard__content">{children}</div>}
    </div>
  );
}

export default ProfileCard;
