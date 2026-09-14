import React from 'react';

interface WheresDocLogoProps {
  className?: string;
  size?: number | string;
  withText?: boolean;
}

export const WheresDocLogo: React.FC<WheresDocLogoProps> = ({
  className = '',
  size = 40,
  withText = false,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Icon Mark: Location Pin + Medical Cross + Pulse Locator */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-xs select-none"
        aria-label="WheresDoc 品牌標誌"
      >
        <defs>
          <linearGradient id="wd-gradient-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e5f54" />
            <stop offset="100%" stopColor="#113a33" />
          </linearGradient>
          <linearGradient id="wd-pin-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#edf7f4" />
          </linearGradient>
          <filter id="wd-soft-shadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#081c18" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Squircle Badge Container */}
        <rect
          width="100"
          height="100"
          rx="26"
          fill="url(#wd-gradient-bg)"
        />

        {/* Subtle Inner Border */}
        <rect
          x="1"
          y="1"
          width="98"
          height="98"
          rx="25"
          stroke="#ffffff"
          strokeOpacity="0.12"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Radar / Ground Ripple below the Pin */}
        <ellipse
          cx="50"
          cy="83"
          rx="15"
          ry="3.5"
          fill="#52a392"
          opacity="0.45"
        />
        <ellipse
          cx="50"
          cy="83"
          rx="8"
          ry="2"
          fill="#a3decb"
          opacity="0.8"
        />

        {/* The 'Where' Location Pin Geometry */}
        <path
          d="M 50 15 C 34.5 15 22 27.5 22 43 C 22 59.2 43.5 75.8 48.4 79.4 C 49.4 80.2 50.6 80.2 51.6 79.4 C 56.5 75.8 78 59.2 78 43 C 78 27.5 65.5 15 50 15 Z"
          fill="url(#wd-pin-gradient)"
          filter="url(#wd-soft-shadow)"
        />

        {/* The 'Doc' Medical Cross Cutout in Pin Center */}
        {/* Vertical Cross Bar */}
        <rect
          x="45.5"
          y="28"
          width="9"
          height="28"
          rx="3.5"
          fill="#174e45"
        />
        {/* Horizontal Cross Bar */}
        <rect
          x="36"
          y="37.5"
          width="28"
          height="9"
          rx="3.5"
          fill="#174e45"
        />

        {/* Center Doctor Compass / Active Pulse Node */}
        <circle
          cx="50"
          cy="42"
          r="2.5"
          fill="#3bba9c"
        />
      </svg>

      {/* Optional Brand Typography */}
      {withText && (
        <span className="leading-tight">
          <span className="block text-base font-black tracking-tight text-[#102420]">
            WheresDoc
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5a756f]">
            One doctor, one verified link
          </span>
        </span>
      )}
    </div>
  );
};
