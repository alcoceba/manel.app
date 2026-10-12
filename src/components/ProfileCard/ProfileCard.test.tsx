import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProfileCard } from './ProfileCard';

describe('ProfileCard', () => {
  it('renders default tag and title', () => {
    render(<ProfileCard />);
    expect(screen.getByText('[ whoami ]')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "Hi 👾 I'm Manel",
    );
  });

  it('renders custom tag, title, and bio children', () => {
    render(
      <ProfileCard tag="[ custom-tag ]" title="Custom Title">
        <p>Custom Bio Content</p>
      </ProfileCard>,
    );
    expect(screen.getByText('[ custom-tag ]')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: 'Custom Title' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Custom Bio Content')).toBeInTheDocument();
  });

  it('omits tag when empty', () => {
    render(<ProfileCard tag="" title="No Tag" />);
    expect(screen.queryByText('[ whoami ]')).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: 'No Tag' }),
    ).toBeInTheDocument();
  });
});
