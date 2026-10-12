import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Home from './Home';

describe('Home Page', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: false,
      media: '',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('renders terminal window and profile card', () => {
    render(<Home />);

    expect(screen.getByTestId('terminal-container')).toBeInTheDocument();
    expect(screen.getByTestId('profile-card')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: "Hi 👾 I'm Manel" }),
    ).toBeInTheDocument();
    expect(screen.getByText('View the source code on')).toBeInTheDocument();
  });

  it('renders easter egg behind the terminal in HTML', () => {
    render(<Home />);

    const egg = screen.getByTestId('easter-egg');
    expect(egg).toBeInTheDocument();
    expect(egg).not.toHaveClass('Home__egg--hidden');
    expect(screen.getByText('hi! 👋')).toBeInTheDocument();
  });

  it('hides easter egg when terminal is closed or minimized to avoid overlap', () => {
    render(<Home />);

    const egg = screen.getByTestId('easter-egg');
    expect(egg).not.toHaveClass('Home__egg--hidden');

    // Close terminal
    act(() => {
      screen.getByTestId('terminal-close-button').click();
    });
    expect(screen.getByTestId('terminal-closed')).toBeInTheDocument();
    expect(egg).toHaveClass('Home__egg--hidden');

    // Relaunch terminal
    act(() => {
      screen.getByTestId('terminal-reopen-button').click();
    });
    expect(screen.getByTestId('terminal-container')).toBeInTheDocument();
    expect(egg).not.toHaveClass('Home__egg--hidden');

    // Minimize terminal
    act(() => {
      screen.getByTestId('terminal-minimize-button').click();
    });
    expect(screen.getByTestId('terminal-minimized')).toBeInTheDocument();
    expect(egg).toHaveClass('Home__egg--hidden');

    // Restore terminal
    act(() => {
      screen.getByTestId('terminal-restore-button').click();
    });
    expect(screen.getByTestId('terminal-container')).toBeInTheDocument();
    expect(egg).not.toHaveClass('Home__egg--hidden');
  });

  it('progresses terminal typing and renders links upon completion', () => {
    render(<Home />);

    // Initially shows initializing spinner before cat command
    expect(screen.getByText('initializing...')).toBeInTheDocument();

    // Fast-forward animation timers to completion
    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(
      screen.getByText(
        "☕️ I'm open to connect and share ideas, or just talk about what you're working on.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByTestId('terminal-links')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: '[ LinkedIn ]' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: '[ GitHub ]' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: '[ daily.dev ]' }),
    ).toBeInTheDocument();
  });

  it('re-executes full flow when terminal is closed and relaunched', () => {
    render(<Home />);

    // Fast-forward to completion
    act(() => {
      vi.advanceTimersByTime(10000);
    });
    expect(screen.getByTestId('terminal-links')).toBeInTheDocument();

    // Close terminal
    act(() => {
      screen.getByTestId('terminal-close-button').click();
    });
    expect(screen.getByTestId('terminal-closed')).toBeInTheDocument();

    // Relaunch terminal
    act(() => {
      screen.getByTestId('terminal-reopen-button').click();
    });
    expect(screen.getByTestId('terminal-container')).toBeInTheDocument();

    // Flow restarted: message and links are not visible immediately
    expect(screen.queryByTestId('terminal-links')).not.toBeInTheDocument();

    // Fast-forward again
    act(() => {
      vi.advanceTimersByTime(10000);
    });
    expect(screen.getByTestId('terminal-links')).toBeInTheDocument();
  });

  it('does not restart flow when minimized and restored', () => {
    render(<Home />);

    // Fast-forward to completion
    act(() => {
      vi.advanceTimersByTime(10000);
    });
    expect(screen.getByTestId('terminal-links')).toBeInTheDocument();

    // Minimize terminal
    act(() => {
      screen.getByTestId('terminal-minimize-button').click();
    });
    expect(screen.getByTestId('terminal-minimized')).toBeInTheDocument();

    // Restore terminal
    act(() => {
      screen.getByTestId('terminal-restore-button').click();
    });
    expect(screen.getByTestId('terminal-container')).toBeInTheDocument();

    // Flow was NOT restarted: links remain immediately visible!
    expect(screen.getByTestId('terminal-links')).toBeInTheDocument();
  });
});
