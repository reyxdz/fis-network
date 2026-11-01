type IconProps = { className?: string };

export function PhoneMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M7.2 3.8c.5-.5 1.3-.5 1.7 0l1.7 1.7c.4.4.5 1.1.2 1.6L9.6 9.3c-.2.3-.1.7.1 1 1.1 1.5 2.5 2.9 4 4 .3.2.7.3 1 .1l2.2-1.2c.5-.3 1.2-.2 1.6.2l1.7 1.7c.5.5.5 1.2 0 1.7l-1.1 1.1c-.7.7-1.7 1-2.7.8-2.4-.4-4.7-1.8-6.9-4-2.2-2.2-3.6-4.5-4-6.9-.2-1 .1-2 .8-2.7l1.1-1.1Z" />
    </svg>
  );
}

export function FacebookMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path
        fill="#fff"
        d="M13.2 8.1h1.9V5.4h-2c-2.4 0-3.9 1.4-3.9 3.8V11H7.6v2.7h1.6V22h2.9v-8.3h2.1l.4-2.7h-2.5V9.5c0-.7.3-1.4 1.1-1.4Z"
      />
    </svg>
  );
}

export function RouterMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <rect className="part part-body" x="8" y="30" width="48" height="22" rx="4" />
      <path className="part part-ant part-ant-a" d="M18 30V16" />
      <path className="part part-ant part-ant-b" d="M32 30V12" />
      <path className="part part-ant part-ant-c" d="M46 30V16" />
      <circle className="part part-led part-led-a" cx="18" cy="41" r="2" />
      <circle className="part part-led part-led-b" cx="26" cy="41" r="2" />
      <circle className="part part-led part-led-c" cx="34" cy="41" r="2" />
    </svg>
  );
}

export function SunMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <circle className="part part-sun" cx="32" cy="32" r="10" />
      <g className="part part-rays">
        <path className="part part-ray part-ray-1" d="M32 8v8" />
        <path className="part part-ray part-ray-2" d="M32 48v8" />
        <path className="part part-ray part-ray-3" d="M8 32h8" />
        <path className="part part-ray part-ray-4" d="M48 32h8" />
        <path className="part part-ray part-ray-5" d="M14.5 14.5l5.6 5.6" />
        <path className="part part-ray part-ray-6" d="M43.9 43.9l5.6 5.6" />
        <path className="part part-ray part-ray-7" d="M14.5 49.5l5.6-5.6" />
        <path className="part part-ray part-ray-8" d="M43.9 20.1l5.6-5.6" />
      </g>
    </svg>
  );
}

export function PanelMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path className="part part-roof" d="M8 28 L32 12 L56 28" />
      <rect className="part part-panel" x="14" y="30" width="36" height="22" rx="2" />
      <path className="part part-grid part-grid-a" d="M26 30v22M38 30v22" />
      <path className="part part-grid part-grid-b" d="M14 37h36M14 45h36" />
    </svg>
  );
}

export function BatteryMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <rect className="part part-case" x="10" y="18" width="40" height="28" rx="4" />
      <rect className="part part-cap" x="50" y="26" width="6" height="12" rx="1" />
      <rect className="part part-bar part-bar-a" x="16" y="24" width="8" height="16" rx="1" />
      <rect className="part part-bar part-bar-b" x="28" y="24" width="8" height="16" rx="1" />
      <rect className="part part-bar part-bar-c" x="40" y="24" width="6" height="16" rx="1" />
    </svg>
  );
}

export function InspectMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <circle className="part part-rim" cx="28" cy="28" r="14" />
      <circle className="part part-glass" cx="28" cy="28" r="6" />
      <path className="part part-handle" d="M38 38 L52 52" />
    </svg>
  );
}

export function CameraMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path className="part part-arm" d="M10 50h14l6-8" />
      <rect className="part part-housing" x="22" y="16" width="34" height="24" rx="6" />
      <circle className="part part-bezel" cx="39" cy="28" r="8" />
      <circle className="part part-glass" cx="39" cy="28" r="4" />
      <circle className="part part-lamp" cx="50" cy="21" r="1.6" />
    </svg>
  );
}
