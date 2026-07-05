interface InstagramIconProps {
  className?: string;
}

/**
 * Instagram brand glyph rendered as an inline SVG.
 * Uses currentColor so it inherits text color from the parent.
 */
export default function InstagramIcon({ className = "h-6 w-6" }: InstagramIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Rounded square frame */}
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      {/* Camera lens */}
      <circle cx="12" cy="12" r="4" />
      {/* Highlight dot */}
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
