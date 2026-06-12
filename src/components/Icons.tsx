import type { SVGProps } from 'react';

// Shared base props give every icon a consistent stroke style.
const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export type IconProps = { className?: string };

/** The Claimo gem mark — used for the logo. */
export function Logo({ className }: IconProps) {
  return (
    <svg className={className} width="28" height="26" viewBox="0 0 26 24" fill="none" aria-hidden="true">
      <path
        d="M5.5 2h15l5.5 8-13 12L0 10z"
        fill="rgba(0,235,196,0.14)"
        stroke="#00ebc4"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M0 10h26M9.5 2 7 10l6 9.5M16.5 2 19 10l-6 9.5"
        stroke="#00ebc4"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function Gamepad({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="2" y="6" width="20" height="12" rx="4" />
      <path d="M7 12h4M9 10v4M15.5 11.5h.01M18 13h.01" />
    </svg>
  );
}

export function Gem({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M6 3h12l4 6-10 13L2 9z" />
      <path d="M2 9h20M10 3 8 9l4 12M14 3l2 6-4 12" />
    </svg>
  );
}

export function Wallet({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2" />
      <rect x="3" y="7" width="18" height="13" rx="3" />
      <path d="M16 12.5h3v3h-3a1.5 1.5 0 0 1 0-3Z" />
    </svg>
  );
}

export function Gift({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7M12 8v13" />
      <path d="M12 8c-4 0-5.5-1.2-5.5-2.9C6.5 3.9 7.6 3 8.9 3 11 3 12 5.5 12 8ZM12 8c4 0 5.5-1.2 5.5-2.9C17.5 3.9 16.4 3 15.1 3 13 3 12 5.5 12 8Z" />
    </svg>
  );
}

export function Flame({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3c1.5 3 4.5 4.2 4.5 8a4.5 4.5 0 0 1-9 0c0-1.4.6-2.5 1.3-3.4C9.6 9 10 10 11 10c1 0 .5-2 1-7Z" />
    </svg>
  );
}

export function Bolt({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function Shield({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3 5 6v5c0 4.4 3 8.4 7 9.5 4-1.1 7-5.1 7-9.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Trophy({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3M9 17h6M10 17v3M14 17v3M8 21h8" />
    </svg>
  );
}

export function Lock({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="4" y="10" width="16" height="11" rx="3" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 15v2" />
    </svg>
  );
}

export function Eye({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function BadgeCheck({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="m12 2 2.4 1.8 3 .2.9 2.9 2.4 1.8-.9 2.9.9 2.9-2.4 1.8-.9 2.9-3 .2L12 22l-2.4-1.8-3-.2-.9-2.9L3.3 15.3l.9-2.9-.9-2.9 2.4-1.8.9-2.9 3-.2L12 2Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Android({ className }: IconProps) {
  return (
    <svg className={className} {...base} strokeWidth={1.7}>
      <path d="M5 16.5V10a7 7 0 0 1 14 0v6.5" />
      <rect x="3" y="10" width="18" height="9" rx="4" />
      <path d="M8 19v2M16 19v2M7.5 8.5 6 6.5M16.5 8.5 18 6.5" />
    </svg>
  );
}

export function Chevron({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
