import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TerminalResizeGrip } from './TerminalResizeGrip';

describe('TerminalResizeGrip', () => {
  it('renders the resize grip element with svg icon', () => {
    render(
      <TerminalResizeGrip
        gripProps={{
          onPointerDown: vi.fn(),
          onPointerMove: vi.fn(),
          onPointerUp: vi.fn(),
          onPointerCancel: vi.fn(),
        }}
      />,
    );

    const grip = screen.getByTestId('terminal-resize-grip');
    expect(grip).toBeInTheDocument();
    expect(grip).toHaveAttribute('title', 'Resize terminal');
  });

  it('triggers pointer down, move, and up callbacks', () => {
    const handlePointerDown = vi.fn();
    const handlePointerMove = vi.fn();
    const handlePointerUp = vi.fn();

    render(
      <TerminalResizeGrip
        gripProps={{
          onPointerDown: handlePointerDown,
          onPointerMove: handlePointerMove,
          onPointerUp: handlePointerUp,
          onPointerCancel: vi.fn(),
        }}
      />,
    );

    const grip = screen.getByTestId('terminal-resize-grip');
    fireEvent.pointerDown(grip);
    expect(handlePointerDown).toHaveBeenCalledTimes(1);

    fireEvent.pointerMove(grip);
    expect(handlePointerMove).toHaveBeenCalledTimes(1);

    fireEvent.pointerUp(grip);
    expect(handlePointerUp).toHaveBeenCalledTimes(1);
  });
});
