import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TerminalTrafficLights } from './TerminalTrafficLights';

describe('TerminalTrafficLights', () => {
  it('renders all three window control buttons with correct titles', () => {
    render(
      <TerminalTrafficLights
        isMaximized={false}
        onClose={vi.fn()}
        onMinimize={vi.fn()}
        onMaximize={vi.fn()}
      />,
    );

    expect(screen.getByTestId('terminal-close-button')).toBeInTheDocument();
    expect(screen.getByTestId('terminal-minimize-button')).toBeInTheDocument();
    expect(screen.getByTestId('terminal-maximize-button')).toBeInTheDocument();
  });

  it('triggers onClose, onMinimize, and onMaximize callbacks when clicked', () => {
    const handleClose = vi.fn();
    const handleMinimize = vi.fn();
    const handleMaximize = vi.fn();

    render(
      <TerminalTrafficLights
        isMaximized={false}
        onClose={handleClose}
        onMinimize={handleMinimize}
        onMaximize={handleMaximize}
      />,
    );

    fireEvent.click(screen.getByTestId('terminal-close-button'));
    expect(handleClose).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByTestId('terminal-minimize-button'));
    expect(handleMinimize).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByTestId('terminal-maximize-button'));
    expect(handleMaximize).toHaveBeenCalledTimes(1);
  });

  it('stops pointer down event propagation to prevent toolbar drag', () => {
    render(
      <TerminalTrafficLights
        isMaximized={false}
        onClose={vi.fn()}
        onMinimize={vi.fn()}
        onMaximize={vi.fn()}
      />,
    );

    const closeButton = screen.getByTestId('terminal-close-button');
    const pointerEvent = new MouseEvent('pointerdown', { bubbles: true });
    const stopPropagationSpy = vi.spyOn(pointerEvent, 'stopPropagation');

    closeButton.dispatchEvent(pointerEvent);
    expect(stopPropagationSpy).toHaveBeenCalled();
  });
});
