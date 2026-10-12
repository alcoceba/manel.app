import type { TerminalLinkItem } from '../../hooks/useTerminalSession';
import './TerminalLinks.scss';

export interface TerminalLinksProps {
  hint?: string;
  links: TerminalLinkItem[];
}

export function TerminalLinks({
  hint = '# matches found (click one):',
  links,
}: TerminalLinksProps) {
  return (
    <nav
      className="TerminalLinks"
      aria-label="Terminal links"
      data-testid="terminal-links"
    >
      {hint && <div className="TerminalLinks__hint">{hint}</div>}
      <div className="TerminalLinks__row">
        {links.map(link => (
          <a
            key={link.label}
            className="TerminalLinks__link"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.title}
          >
            [ {link.label} ]
          </a>
        ))}
      </div>
    </nav>
  );
}

export default TerminalLinks;
