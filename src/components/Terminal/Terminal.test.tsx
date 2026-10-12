import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Terminal } from './Terminal';

describe('Terminal Component', () => {
  it('renders title, action buttons, and children content', () => {
    render(
      <Terminal title="custom@dev: ~">
        <div data-testid="test-content">Terminal Content</div>
      </Terminal>,
    );

    expect(screen.getByText('custom@dev: ~')).toBeInTheDocument();
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
    expect(screen.getByTestId('terminal-close-button')).toBeInTheDocument();
    expect(screen.getByTestId('terminal-minimize-button')).toBeInTheDocument();
    expect(screen.getByTestId('terminal-maximize-button')).toBeInTheDocument();
  });

  it('closes the terminal when close button is clicked and allows reopening', () => {
    const handleClose = vi.fn();
    const handleRestore = vi.fn();

    render(
      <Terminal onClose={handleClose} onRestore={handleRestore}>
        <div>Content</div>
      </Terminal>,
    );

    fireEvent.click(screen.getByTestId('terminal-close-button'));
    expect(handleClose).toHaveBeenCalledTimes(1);

    expect(screen.queryByTestId('terminal-container')).not.toBeInTheDocument();
    expect(screen.getByTestId('terminal-closed')).toBeInTheDocument();
    expect(screen.getByText('Terminal session closed.')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('terminal-reopen-button'));
    expect(handleRestore).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('terminal-container')).toBeInTheDocument();
  });

  it('minimizes the terminal and un-minimizes via restore notice button', () => {
    const handleMinimize = vi.fn();
    const handleRestore = vi.fn();

    render(
      <Terminal onMinimize={handleMinimize} onRestore={handleRestore}>
        <div>Content</div>
      </Terminal>,
    );

    fireEvent.click(screen.getByTestId('terminal-minimize-button'));
    expect(handleMinimize).toHaveBeenCalledTimes(1);

    expect(screen.queryByTestId('terminal-container')).not.toBeInTheDocument();
    expect(screen.getByTestId('terminal-minimized')).toBeInTheDocument();
    expect(screen.getByText('Terminal minimized.')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('terminal-restore-button'));
    expect(handleRestore).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('terminal-container')).toBeInTheDocument();
  });

  it('un-minimizes when pressing Escape key', () => {
    render(
      <Terminal initialMinimized={true}>
        <div>Content</div>
      </Terminal>,
    );

    expect(screen.getByTestId('terminal-minimized')).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.getByTestId('terminal-container')).toBeInTheDocument();
  });

  it('toggles maximize when green button is clicked', () => {
    const handleMaximize = vi.fn();

    render(
      <Terminal onMaximize={handleMaximize}>
        <div>Content</div>
      </Terminal>,
    );

    const container = screen.getByTestId('terminal-container');
    const maxButton = screen.getByTestId('terminal-maximize-button');

    expect(container).not.toHaveClass('Terminal--maximized');

    // Click to maximize
    fireEvent.click(maxButton);
    expect(handleMaximize).toHaveBeenCalledWith(true);
    expect(container).toHaveClass('Terminal--maximized');

    // Click again to restore
    fireEvent.click(maxButton);
    expect(handleMaximize).toHaveBeenCalledWith(false);
    expect(container).not.toHaveClass('Terminal--maximized');
  });

  it('un-maximizes when pressing Escape key', () => {
    render(
      <Terminal initialMaximized={true}>
        <div>Content</div>
      </Terminal>,
    );

    const container = screen.getByTestId('terminal-container');
    expect(container).toHaveClass('Terminal--maximized');

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(container).not.toHaveClass('Terminal--maximized');
  });

  it('toggles maximize on toolbar double-click', () => {
    render(
      <Terminal>
        <div>Content</div>
      </Terminal>,
    );

    const container = screen.getByTestId('terminal-container');
    const toolbar = screen.getByTestId('terminal-toolbar');

    fireEvent.doubleClick(toolbar);
    expect(container).toHaveClass('Terminal--maximized');

    fireEvent.doubleClick(toolbar);
    expect(container).not.toHaveClass('Terminal--maximized');
  });

  it('drags toolbar and updates window transform position', () => {
    render(
      <Terminal>
        <div>Content</div>
      </Terminal>,
    );

    const container = screen.getByTestId('terminal-container');
    const toolbar = screen.getByTestId('terminal-toolbar');

    expect(container).toHaveStyle({
      transform: 'translate3d(0px, 0px, 0)',
    });

    // Start drag
    fireEvent.pointerDown(toolbar, {
      button: 0,
      clientX: 100,
      clientY: 100,
      pointerId: 1,
    });
    expect(container).toHaveClass('Terminal--dragging');

    // Move pointer
    fireEvent.pointerMove(toolbar, {
      clientX: 150,
      clientY: 180,
      pointerId: 1,
    });
    expect(container).toHaveStyle({
      transform: 'translate3d(50px, 80px, 0)',
    });

    // End drag
    fireEvent.pointerUp(toolbar, { pointerId: 1 });
    expect(container).not.toHaveClass('Terminal--dragging');
  });

  it('renders statusContent in footer when provided', () => {
    render(
      <Terminal
        statusContent={<span data-testid="status-bar">Status details</span>}
      >
        <div>Content</div>
      </Terminal>,
    );

    expect(screen.getByTestId('status-bar')).toBeInTheDocument();
  });

  it('resizes window when dragging the resize grip', () => {
    render(
      <Terminal>
        <div>Content</div>
      </Terminal>,
    );

    const container = screen.getByTestId('terminal-container');
    const grip = screen.getByTestId('terminal-resize-grip');

    vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
      width: 400,
      height: 300,
      top: 0,
      left: 0,
      bottom: 300,
      right: 400,
      x: 0,
      y: 0,
      toJSON: () => {},
    });

    fireEvent.pointerDown(grip, {
      button: 0,
      clientX: 400,
      clientY: 300,
      pointerId: 2,
    });
    expect(container).toHaveClass('Terminal--resizing');

    fireEvent.pointerMove(grip, {
      clientX: 450,
      clientY: 380,
      pointerId: 2,
    });
    expect(container).toHaveStyle({
      width: '450px',
      height: '380px',
    });

    fireEvent.pointerUp(grip, { pointerId: 2 });
    expect(container).not.toHaveClass('Terminal--resizing');
  });
});
