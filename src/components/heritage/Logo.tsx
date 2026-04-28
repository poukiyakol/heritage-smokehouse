interface LogoProps {
  size?: number;
  className?: string;
}

export const SteakLogo = ({ size = 40, className = "" }: LogoProps) => (
  <div
    className={`bg-brick-red flex items-center justify-center ${className}`}
    style={{ width: size, height: size, borderRadius: size * 0.2 }}
  >
    <svg viewBox="0 0 24 24" width={size * 0.6} height={size * 0.6} fill="none" stroke="white" strokeWidth="1.5">
      {/* Stylized steak cut */}
      <path d="M5 9c1-3 5-5 9-4 3 1 5 3 5 6 0 2-1 4-3 5-3 2-7 2-10 0-2-1-2-4-1-7z" strokeLinejoin="round" />
      <path d="M9 10c0.5-0.5 1.5-0.5 2 0M13 10.5c0.5-0.3 1-0.3 1.5 0" strokeLinecap="round" />
      <circle cx="10" cy="13" r="0.5" fill="white" />
      <circle cx="14" cy="12.5" r="0.4" fill="white" />
    </svg>
  </div>
);
