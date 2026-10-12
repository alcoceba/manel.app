import type { MouseEvent, PointerEvent } from 'react';
import './TerminalBar.scss';
import {
  TerminalTrafficLights,
  type TerminalTrafficLightsProps,
} from './TerminalTrafficLights';

export interface TerminalBarProps {
  title: string;
  trafficLights: TerminalTrafficLightsProps;
  barProps: {
    onPointerDown: (e: PointerEvent<HTMLDivElement>) => void;
    onPointerMove: (e: PointerEvent<HTMLDivElement>) => void;
    onPointerUp: (e: PointerEvent<HTMLDivElement>) => void;
    onPointerCancel: (e: PointerEvent<HTMLDivElement>) => void;
    onDoubleClick: (e: MouseEvent<HTMLDivElement>) => void;
  };
}

export function TerminalBar({
  title,
  trafficLights,
  barProps,
}: TerminalBarProps) {
  return (
    <div
      className="Terminal__bar"
      data-testid="terminal-toolbar"
      onPointerDown={barProps.onPointerDown}
      onPointerMove={barProps.onPointerMove}
      onPointerUp={barProps.onPointerUp}
      onPointerCancel={barProps.onPointerCancel}
      onDoubleClick={barProps.onDoubleClick}
    >
      <TerminalTrafficLights {...trafficLights} />
      <span className="Terminal__title">{title}</span>
    </div>
  );
}

export default TerminalBar;
