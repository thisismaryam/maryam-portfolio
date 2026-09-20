/* Hand-drawn SVG marks. All inherit sizing from CSS; colour via props. */

export function Star({ className = '', color = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 3c1.6 10.2 5.3 15.6 15.4 18.4C29.4 24.1 25.6 29.6 24 45c-1.6-15.4-5.4-20.9-15.4-23.6C18.7 18.6 22.4 13.2 24 3Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Star5({ className = '', color = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M32 5 12 52l46-29H6l46 29L32 5Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Scribble({ className = '', color = 'var(--magenta)' }) {
  return (
    <svg className={className} viewBox="0 0 160 26" fill="none" aria-hidden="true">
      <path
        d="M3 18c10-14 20 8 30-4s20 10 30-2 20 8 30-4 20 9 34 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Bracket({ className = '', rotate = 0, color = 'var(--gold)' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M45 3H12a9 9 0 0 0-9 9v33"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Ring({ className = '', color = 'var(--magenta)' }) {
  return (
    <svg className={className} viewBox="0 0 90 60" fill="none" aria-hidden="true">
      <ellipse
        cx="45"
        cy="30"
        rx="41"
        ry="25"
        stroke={color}
        strokeWidth="1.8"
        transform="rotate(-6 45 30)"
      />
    </svg>
  )
}

export function Arrow({ className = '', color = 'var(--magenta)' }) {
  return (
    <svg className={className} viewBox="0 0 90 60" fill="none" aria-hidden="true">
      <path
        d="M4 6c26 4 48 18 60 42"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M49 45l16 4 2-16"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Underline({ className = '', color = 'var(--magenta)' }) {
  return (
    <svg className={className} viewBox="0 0 220 14" fill="none" aria-hidden="true">
      <path
        d="M3 9c40-7 92-8 146-4 25 2 47 4 68 5"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}
