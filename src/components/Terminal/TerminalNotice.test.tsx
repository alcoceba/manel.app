import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TerminalNotice } from './TerminalNotice';

describe('TerminalNotice', () => {
  it('renders the notice message and action button with proper testId', () => {
    const handleAction = vi.fn();

    render(
      <TerminalNotice
        message="Notice text message"
        buttonLabel="[ Action Button ]"
        buttonTestId="custom-action-button"
        onAction={handleAction}
      />,
    );

    expect(screen.getByText('Notice text message')).toBeInTheDocument();
    const button = screen.getByTestId('custom-action-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('[ Action Button ]');

    fireEvent.click(button);
    expect(handleAction).toHaveBeenCalledTimes(1);
  });
});
