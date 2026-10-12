import './TerminalPrompt.scss';

export interface TerminalPromptProps {
  user?: string;
  path?: string;
}

export function TerminalPrompt({
  user = 'manel@dev',
  path = ':~$',
}: TerminalPromptProps) {
  return (
    <span
      className="TerminalPrompt"
      aria-hidden="true"
      data-testid="terminal-prompt"
    >
      <span className="TerminalPrompt__user">{user}</span>
      <span className="TerminalPrompt__path">{path}</span>{' '}
    </span>
  );
}

export default TerminalPrompt;
