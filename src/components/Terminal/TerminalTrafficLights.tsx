import type { MouseEvent } from 'react';
import './TerminalTrafficLights.scss';

export interface TerminalTrafficLightsProps {
  isMaximized: boolean;
  onClose: (e: MouseEvent) => void;
  onMinimize: (e: MouseEvent) => void;
  onMaximize: (e: MouseEvent) => void;
}

export function TerminalTrafficLights({
  isMaximized,
  onClose,
  onMinimize,
  onMaximize,
}: TerminalTrafficLightsProps) {
  return (
    <div className="Terminal__actions">
      <button
        type="button"
        className="Terminal__dot Terminal__dot--red"
        onClick={onClose}
        onPointerDown={e => e.stopPropagation()}
        aria-label="Close terminal"
        title="Close"
        data-testid="terminal-close-button"
      >
        <span className="Terminal__icon" aria-hidden="true">
          ✕
        </span>
      </button>
      <button
        type="button"
        className="Terminal__dot Terminal__dot--yellow"
        onClick={onMinimize}
        onPointerDown={e => e.stopPropagation()}
        aria-label="Minimize terminal"
        title="Minimize"
        data-testid="terminal-minimize-button"
      >
        <span className="Terminal__icon" aria-hidden="true">
          −
        </span>
      </button>
      <button
        type="button"
        className="Terminal__dot Terminal__dot--green"
        onClick={onMaximize}
        onPointerDown={e => e.stopPropagation()}
        aria-label={isMaximized ? 'Restore terminal' : 'Maximize terminal'}
        title={isMaximized ? 'Restore' : 'Maximize'}
        data-testid="terminal-maximize-button"
      >
        <span className="Terminal__icon" aria-hidden="true">
          {isMaximized ? '🗗' : '⤢'}
        </span>
      </button>
    </div>
  );
}

export default TerminalTrafficLights;
