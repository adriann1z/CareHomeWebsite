import React from 'react';
import { LogoSvg } from './LogoSvg';

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
}

export function BrandLogo({ className = '', isLight = false }: BrandLogoProps) {
  const brandTextClass = isLight ? 'text-white' : 'text-sage-deep';
  const accentTextClass = isLight ? 'text-white/90' : 'text-gold';
  const panelClass = isLight
    ? 'bg-white/15 border-white/25 shadow-[0_12px_34px_rgba(0,0,0,0.18)] backdrop-blur-md'
    : 'bg-white border-sage-deep/10 shadow-[0_14px_35px_rgba(42,72,56,0.10)]';

  return (
    <div className={`inline-flex items-center gap-3 sm:gap-4 select-none ${className}`}>
      <div className={`flex h-12 w-12 sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem] items-center justify-center rounded-xl sm:rounded-[1rem] border ${panelClass}`}>
        <LogoSvg isLight={isLight} className="h-10 w-10 sm:h-[3.25rem] sm:w-[3.25rem] md:h-[3.7rem] md:w-[3.7rem]" />
      </div>

      <div className="flex min-w-0 flex-col">
        <span className={`font-serif text-[1.05rem] sm:text-[1.35rem] md:text-[1.65rem] leading-none tracking-[0.08em] sm:tracking-[0.12em] uppercase font-semibold ${brandTextClass}`}>
          The Meadows
        </span>
        <span className={`mt-1 text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.34em] ${accentTextClass}`}>
          Scartho | Grimsby
        </span>
        <span className={`mt-2 hidden h-px w-28 sm:block sm:w-32 md:w-40 ${isLight ? 'bg-white/20' : 'bg-gold/45'}`} />
      </div>
    </div>
  );
}
