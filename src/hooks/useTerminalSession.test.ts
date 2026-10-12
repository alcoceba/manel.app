import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  checkPrefersReducedMotion,
  DEFAULT_CAT_CMD,
  DEFAULT_FETCH_CMD,
  DEFAULT_MESSAGE,
  useTerminalSession,
} from './useTerminalSession';

describe('useTerminalSession', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('immediately completes when disableAnimation is true', () => {
    const { result } = renderHook(() =>
      useTerminalSession({ disableAnimation: true }),
    );

    expect(result.current.isComplete).toBe(true);
    expect(result.current.isInitDone).toBe(true);
    expect(result.current.isInitializing).toBe(false);
    expect(result.current.isMessageVisible).toBe(true);
    expect(result.current.isResultsVisible).toBe(true);
    expect(result.current.isFinalPromptVisible).toBe(true);
    expect(result.current.catChars).toBe(DEFAULT_CAT_CMD.length);
    expect(result.current.fetchChars).toBe(DEFAULT_FETCH_CMD.length);
    expect(result.current.message).toBe(DEFAULT_MESSAGE);
  });

  it('runs animated sequence with initializing phase followed by typing and commands', () => {
    const { result } = renderHook(() =>
      useTerminalSession({
        disableAnimation: false,
        initialDelayMs: 100,
        initDurationMs: 40,
        tickMs: 20,
        pauseAfterCat: 2,
        spinnerDurationMs: 100,
      }),
    );

    // Initial state before timer starts: initializing is active
    expect(result.current.ticks).toBe(0);
    expect(result.current.isInitializing).toBe(true);
    expect(result.current.isCatLineVisible).toBe(false);
    expect(result.current.catChars).toBe(0);

    // Advance past initial delay (100ms) + 1 tick (20ms) -> still initializing
    act(() => {
      vi.advanceTimersByTime(120);
    });
    expect(result.current.isInitializing).toBe(true);

    // Advance past initDurationMs (40ms) + pause -> catCommand starts
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(result.current.isInitDone).toBe(true);
    expect(result.current.isCatLineVisible).toBe(true);
    expect(result.current.catChars).toBeGreaterThan(0);

    // Fast-forward to completion
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(result.current.isComplete).toBe(true);
    expect(result.current.isMessageVisible).toBe(true);
    expect(result.current.isResultsVisible).toBe(true);
    expect(result.current.isFinalPromptVisible).toBe(true);

    // Call restartSession and verify ticks reset to 0 and initializing restarts
    act(() => {
      result.current.restartSession();
    });

    expect(result.current.ticks).toBe(0);
    expect(result.current.isInitializing).toBe(true);
    expect(result.current.isCatLineVisible).toBe(false);

    // Fast-forward again to re-complete
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(result.current.isComplete).toBe(true);
  });

  it('detects prefersReducedMotion properly via checkPrefersReducedMotion', () => {
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    expect(checkPrefersReducedMotion()).toBe(true);

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

    expect(checkPrefersReducedMotion()).toBe(false);
  });
});
