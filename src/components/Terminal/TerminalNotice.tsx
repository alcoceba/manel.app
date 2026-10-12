import './TerminalNotice.scss';

export interface TerminalNoticeProps {
  message: string;
  buttonLabel: string;
  buttonTestId: string;
  onAction: () => void;
}

export function TerminalNotice({
  message,
  buttonLabel,
  buttonTestId,
  onAction,
}: TerminalNoticeProps) {
  return (
    <div className="Terminal__notice">
      <p className="Terminal__message">{message}</p>
      <button
        type="button"
        className="Terminal__reopen"
        onClick={onAction}
        data-testid={buttonTestId}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default TerminalNotice;
