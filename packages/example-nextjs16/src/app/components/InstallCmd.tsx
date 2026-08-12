'use client';
import React from 'react';

const DEFAULT_CMD = 'npm i state-in-url';

const CopyIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const InstallCmd = ({
  cmd = DEFAULT_CMD,
  label = 'Copy install command',
}: {
  cmd?: string;
  label?: string;
} = {}) => {
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>();

  const onCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
    }
  }, [cmd]);

  React.useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <div className="install-cmd">
      <span className="install-prompt" aria-hidden="true">$</span>
      <code>{cmd}</code>
      <button
        type="button"
        className={copied ? 'install-copy copied' : 'install-copy'}
        onClick={onCopy}
        aria-label={copied ? 'Copied' : label}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? 'Command copied to clipboard' : ''}
      </span>
    </div>
  );
};
