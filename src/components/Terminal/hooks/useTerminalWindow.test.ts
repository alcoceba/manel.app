import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useTerminalWindow } from './useTerminalWindow';

describe('useTerminalWindow', () => {
  it('initializes with default states', () => {
    const { result } = renderHook(() => useTerminalWindow());

    expect(result.current.isClosed).toBe(false);
    expect(result.current.isMinimized).toBe(false);
    expect(result.current.isMaximized).toBe(false);
    expect(result.current.isDragging).toBe(false);
    expect(result.current.isResizing).toBe(false);
    expect(result.current.position).toEqual({ x: 0, y: 0 });
    expect(result.current.size).toBeNull();
  });

  it('handles close, minimize, maximize, and restore actions', () => {
    const onClose = vi.fn();
    const onMinimize = vi.fn();
    const onMaximize = vi.fn();
    const onRestore = vi.fn();
    const onRelaunch = vi.fn();

    const { result } = renderHook(() =>
      useTerminalWindow({
        onClose,
        onMinimize,
        onMaximize,
        onRestore,
        onRelaunch,
      }),
    );

    // Maximize
    act(() => {
      result.current.trafficLightProps.onMaximize({
        stopPropagation: vi.fn(),
      } as unknown as React.MouseEvent);
    });
    expect(result.current.isMaximized).toBe(true);
    expect(onMaximize).toHaveBeenCalledWith(true);

    // Minimize
    act(() => {
      result.current.trafficLightProps.onMinimize({
        stopPropagation: vi.fn(),
      } as unknown as React.MouseEvent);
    });
    expect(result.current.isMinimized).toBe(true);
    expect(onMinimize).toHaveBeenCalled();

    // Restore
    act(() => {
      result.current.handleRestore();
    });
    expect(result.current.isMinimized).toBe(false);
    expect(onRestore).toHaveBeenCalled();

    // Close
    act(() => {
      result.current.trafficLightProps.onClose({
        stopPropagation: vi.fn(),
      } as unknown as React.MouseEvent);
    });
    expect(result.current.isClosed).toBe(true);
    expect(onClose).toHaveBeenCalled();

    // Reopen
    act(() => {
      result.current.handleReopen();
    });
    expect(result.current.isClosed).toBe(false);
    expect(onRelaunch).toHaveBeenCalled();
  });
});
