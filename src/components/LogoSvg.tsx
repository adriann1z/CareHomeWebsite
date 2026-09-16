import React, { useId } from 'react';

interface LogoSvgProps {
  className?: string;
  isLight?: boolean;
}

export function LogoSvg({ className = '', isLight = false }: LogoSvgProps) {
  const id = useId().replace(/:/g, '');
  const skyGradientId = `${id}-sky`;
  const meadowGradientId = `${id}-meadow`;
  const goldGradientId = `${id}-gold`;

  const rim = isLight ? '#ffffff' : '#2A4838';
  const deepGreen = '#2A4838';
  const sage = '#50775E';
  const paleSage = '#EEF3EF';
  const gold = '#C0A164';
  const warmGold = '#EFE4CD';
  const cream = '#FDFDFD';

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={skyGradientId} x1="30" y1="18" x2="88" y2="98" gradientUnits="userSpaceOnUse">
          <stop stopColor={cream} />
          <stop offset="0.58" stopColor={paleSage} />
          <stop offset="1" stopColor="#D9E8DD" />
        </linearGradient>
        <linearGradient id={meadowGradientId} x1="32" y1="78" x2="88" y2="104" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6F9878" />
          <stop offset="1" stopColor={deepGreen} />
        </linearGradient>
        <radialGradient id={goldGradientId} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(75 39) rotate(90) scale(22)">
          <stop stopColor={warmGold} />
          <stop offset="0.65" stopColor={gold} />
          <stop offset="1" stopColor="#A3854E" />
        </radialGradient>
      </defs>

      <path
        d="M60 8.5C82.8 8.5 101.5 27.2 101.5 50V88.4C101.5 92.6 99.1 96.5 95.3 98.4L63.9 114.1C61.4 115.3 58.6 115.3 56.1 114.1L24.7 98.4C20.9 96.5 18.5 92.6 18.5 88.4V50C18.5 27.2 37.2 8.5 60 8.5Z"
        fill={`url(#${skyGradientId})`}
      />
      <path
        d="M60 8.5C82.8 8.5 101.5 27.2 101.5 50V88.4C101.5 92.6 99.1 96.5 95.3 98.4L63.9 114.1C61.4 115.3 58.6 115.3 56.1 114.1L24.7 98.4C20.9 96.5 18.5 92.6 18.5 88.4V50C18.5 27.2 37.2 8.5 60 8.5Z"
        stroke={rim}
        strokeWidth="5"
      />
      <path
        d="M29 82.5C39.8 73.7 51.3 69.4 63.6 69.7C74.9 70 84.1 73.9 95 82.5V88.1C95 90 93.9 91.8 92.2 92.7L62.2 107.7C60.8 108.4 59.2 108.4 57.8 107.7L27.8 92.7C26.1 91.8 25 90 25 88.1V84.5L29 82.5Z"
        fill={`url(#${meadowGradientId})`}
      />
      <path
        d="M59.8 70C54.7 78.4 52.1 89.5 51.9 104.3M60.1 70C65.2 78.7 68 89.8 68.4 104.3"
        stroke={cream}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36 84.4C42.7 80.9 49.1 79.1 55.3 79M84 84.4C77.4 80.9 70.9 79.1 64.7 79"
        stroke={warmGold}
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.85"
      />

      <circle cx="75.5" cy="39.5" r="14.5" fill={`url(#${goldGradientId})`} />
      <path
        d="M75.5 18V24.5M75.5 54.5V61M54 39.5H60.5M90.5 39.5H97M60.4 24.4L65 29M86 50L90.6 54.6M90.6 24.4L86 29M65 50L60.4 54.6"
        stroke={gold}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.75"
      />

      <path
        d="M39 61L60 43.2L81 61"
        stroke={deepGreen}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.5 59.3V76H73.5V59.3"
        fill={cream}
        stroke={deepGreen}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M55.2 76V67.4C55.2 64.8 57.3 62.8 60 62.8C62.7 62.8 64.8 64.8 64.8 67.4V76"
        fill={warmGold}
        stroke={deepGreen}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M51.4 57.2H56.4V62.2H51.4V57.2ZM63.6 57.2H68.6V62.2H63.6V57.2Z"
        fill={sage}
      />

      <path
        d="M30.5 55.5C38.4 53.4 42.9 48.9 44.2 42C37.5 42.8 32.2 47.6 30.5 55.5Z"
        fill={sage}
        stroke={deepGreen}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M90.5 67.5C82.6 65.4 78.1 60.9 76.8 54C83.5 54.8 88.8 59.6 90.5 67.5Z"
        fill={sage}
        stroke={deepGreen}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M35 52.5C43.5 56.4 50.3 60.4 55.4 64.6M86 64.5C77.6 67 70.5 70.6 64.7 75.4"
        stroke={deepGreen}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M31 26.5C38.8 19.5 49 15.5 60 15.5C71 15.5 81.2 19.5 89 26.5"
        stroke={rim}
        strokeWidth="2"
        strokeLinecap="round"
        opacity={isLight ? '0.7' : '0.35'}
      />
    </svg>
  );
}
