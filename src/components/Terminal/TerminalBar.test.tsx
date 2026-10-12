import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TerminalBar } from './TerminalBar';

describe('TerminalBar', () => {
  const dummyTrafficLights = {
    isMaximized: false,
    onClose: vi.fn(),
    onMinimize: vi.fn(),
    onMaximize: vi.fn(),
  };

  it('renders the window title and traffic lights', () => {
    render(
      <TerminalBar
        title="custom@test: ~"
        trafficLights={dummyTrafficLights}
        barProps={{
          onPointerDown: vi.fn(),
          onPointerMove: vi.fn(),
          onPointerUp: vi.fn(),
          onPointerCancel: vi.fn(),
          onDoubleClick: vi.fn(),
        }}
      />,
    );

    expect(screen.getByText('custom@test: ~')).toBeInTheDocument();
    expect(screen.getByTestId('terminal-toolbar')).toBeInTheDocument();
    expect(screen.getByTestId('terminal-close-button')).toBeInTheDocument();
  });

  it('binds pointer events and double click handler', () => {
    const handlePointerDown = vi.fn();
    const handleDoubleClick = vi.fn();

    render(
      <TerminalBar
        title="manel@dev: ~"
        trafficLights={dummyTrafficLights}
        barProps={{
          onPointerDown: handlePointerDown,
          onPointerMove: vi.fn(),
          onPointerUp: vi.fn(),
          onPointerCancel: vi.fn(),
          onDoubleClick: handleDoubleClick,
        }}
      />,
    );

    const toolbar = screen.getByTestId('terminal-toolbar');
    fireEvent.pointerDown(toolbar);
    expect(handlePointerDown).toHaveBeenCalledTimes(1);

    fireEvent.doubleClick(toolbar);
    expect(handleDoubleClick).toHaveBeenCalledTimes(1);
  });
});
