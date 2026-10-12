import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TerminalPrompt } from './TerminalPrompt';

describe('TerminalPrompt', () => {
  it('renders with default user and path', () => {
    render(<TerminalPrompt />);
    const prompt = screen.getByTestId('terminal-prompt');
    expect(prompt).toBeInTheDocument();
    expect(prompt).toHaveTextContent('manel@dev');
    expect(prompt).toHaveTextContent(':~$');
  });

  it('renders with custom user and path', () => {
    render(<TerminalPrompt user="guest@box" path="/home/guest" />);
    const prompt = screen.getByTestId('terminal-prompt');
    expect(prompt).toHaveTextContent('guest@box');
    expect(prompt).toHaveTextContent('/home/guest');
  });
});
