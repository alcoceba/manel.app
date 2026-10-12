import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TerminalLinks } from './TerminalLinks';

describe('TerminalLinks', () => {
  const sampleLinks = [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alcoceba/',
      title: 'Go to LinkedIn / alcoceba',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/alcoceba/',
      title: 'Go to GitHub / alcoceba',
    },
  ];

  it('renders default hint and provided links', () => {
    render(<TerminalLinks links={sampleLinks} />);
    expect(
      screen.getByText('# matches found (click one):'),
    ).toBeInTheDocument();

    const linkedinLink = screen.getByRole('link', {
      name: '[ LinkedIn ]',
    });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/alcoceba/',
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkedinLink).toHaveAttribute('title', 'Go to LinkedIn / alcoceba');

    const githubLink = screen.getByRole('link', { name: '[ GitHub ]' });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/alcoceba/');
  });

  it('renders custom hint text', () => {
    render(<TerminalLinks hint="# available endpoints:" links={sampleLinks} />);
    expect(screen.getByText('# available endpoints:')).toBeInTheDocument();
  });
});
