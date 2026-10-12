import type { PointerEvent } from 'react';
import './TerminalResizeGrip.scss';

export interface TerminalResizeGripProps {
  gripProps: {
    onPointerDown: (e: PointerEvent<HTMLDivElement>) => void;
    onPointerMove: (e: PointerEvent<HTMLDivElement>) => void;
    onPointerUp: (e: PointerEvent<HTMLDivElement>) => void;
    onPointerCancel: (e: PointerEvent<HTMLDivElement>) => void;
  };
}

export function TerminalResizeGrip({ gripProps }: TerminalResizeGripProps) {
  return (
    <div
      className="Terminal__grip"
      data-testid="terminal-resize-grip"
      onPointerDown={gripProps.onPointerDown}
      onPointerMove={gripProps.onPointerMove}
      onPointerUp={gripProps.onPointerUp}
      onPointerCancel={gripProps.onPointerCancel}
      aria-hidden="true"
      title="Resize terminal"
    >
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 1L1 7M7 4L4 7M7 7L7 7"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default TerminalResizeGrip;
