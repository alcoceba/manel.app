import { useCallback, useEffect, useState } from 'react';

export interface TerminalLinkItem {
  label: string;
  url: string;
  title: string;
}

export const DEFAULT_CAT_CMD = 'cat coffee.txt';
export const DEFAULT_MESSAGE =
  "☕️ I'm open to connect and share ideas, or just talk about what you're working on.";
export const DEFAULT_FETCH_CMD = 'curl -sL https://manel.is-a.dev/api/contact';
export const SPINNER_FRAMES = ['|', '/', '-', '\\'] as const;

export const DEFAULT_LINKS: TerminalLinkItem[] = [
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
  {
    label: 'daily.dev',
    url: 'https://app.daily.dev/alcoceba/',
    title: 'Go to daily.dev / alcoceba',
  },
];

export interface UseTerminalSessionOptions {
  catCommand?: string;
  message?: string;
  fetchCommand?: string;
  tickMs?: number;
  initDurationMs?: number;
  spinnerDurationMs?: number;
  pauseAfterCat?: number;
  initialDelayMs?: number;
  disableAnimation?: boolean;
}

export function checkPrefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useTerminalSession(options: UseTerminalSessionOptions = {}) {
  const {
    catCommand = DEFAULT_CAT_CMD,
    message = DEFAULT_MESSAGE,
    fetchCommand = DEFAULT_FETCH_CMD,
    tickMs = 50,
    initDurationMs = 1000,
    spinnerDurationMs = 1500,
    pauseAfterCat = 8,
    initialDelayMs = 300,
    disableAnimation,
  } = options;

  const initTicks = Math.round(initDurationMs / tickMs);
  const catStart = initTicks + 2;
  const catEnd = catStart + catCommand.length;
  const spinnerTicks = Math.round(spinnerDurationMs / tickMs);
  const fetchStart = catEnd + pauseAfterCat;
  const fetchEnd = fetchStart + fetchCommand.length;
  const spinnerStart = fetchEnd + 2;
  const spinnerEnd = spinnerStart + spinnerTicks;
  const totalTicks = spinnerEnd + 2;

  const shouldDisable =
    disableAnimation !== undefined
      ? disableAnimation
      : checkPrefersReducedMotion();

  const [ticks, setTicks] = useState<number>(0);
  const [sessionKey, setSessionKey] = useState<number>(0);

  const restartSession = useCallback(() => {
    setTicks(0);
    setSessionKey(prev => prev + 1);
  }, []);

  useEffect(() => {
    if (shouldDisable) {
      return;
    }

    let interval: ReturnType<typeof setInterval>;
    const timer = setTimeout(() => {
      let count = 0;
      interval = setInterval(() => {
        count += 1;
        setTicks(count);
        if (count >= totalTicks) {
          clearInterval(interval);
        }
      }, tickMs);
    }, initialDelayMs);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [shouldDisable, totalTicks, tickMs, initialDelayMs, sessionKey]);

  const activeTicks = shouldDisable ? totalTicks : ticks;

  const isInitializing = activeTicks < initTicks;
  const isInitDone = activeTicks >= initTicks;
  const initSpinnerFrame =
    SPINNER_FRAMES[
      Math.floor(Math.max(0, activeTicks) / 2) % SPINNER_FRAMES.length
    ];

  const isCatLineVisible = activeTicks >= catStart;
  const catChars = Math.max(
    0,
    Math.min(activeTicks - catStart, catCommand.length),
  );
  const isMessageVisible = activeTicks >= catEnd;
  const fetchChars = Math.max(
    0,
    Math.min(activeTicks - fetchStart, fetchCommand.length),
  );
  const isFetchLineVisible = activeTicks >= fetchStart;
  const isFetchDone = activeTicks >= fetchEnd;
  const isSpinnerVisible =
    activeTicks >= spinnerStart && activeTicks < spinnerEnd;
  const spinnerFrame =
    SPINNER_FRAMES[
      Math.floor(Math.max(0, activeTicks - spinnerStart) / 2) %
        SPINNER_FRAMES.length
    ];
  const isResultsVisible = activeTicks >= spinnerEnd;
  const isFinalPromptVisible = activeTicks >= totalTicks;
  const isComplete = activeTicks >= totalTicks;

  return {
    ticks: activeTicks,
    catCommand,
    message,
    fetchCommand,
    isInitializing,
    isInitDone,
    initSpinnerFrame,
    isCatLineVisible,
    catChars,
    catEnd,
    isMessageVisible,
    fetchChars,
    isFetchLineVisible,
    isFetchDone,
    isSpinnerVisible,
    spinnerFrame,
    isResultsVisible,
    isFinalPromptVisible,
    isComplete,
    totalTicks,
    restartSession,
  };
}
