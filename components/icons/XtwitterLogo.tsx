import React from "react";

export interface IXtwitterLogo {
  size?: number;
  className?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export const XtwitterLogo: React.FC<IXtwitterLogo> = ({
  size = 20,
  className,
  strokeWidth = 1.5,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M9.52216 6.77472L15.4784 0H14.0669L8.89525 5.88256L4.76452 0H0L6.24629 8.89536L0 16H1.41147L6.87289 9.78752L11.2355 16H16L9.52151 6.77472H9.52216ZM7.58876 8.97376L6.95595 8.088L1.92 1.03968H4.08822L8.15223 6.72768L8.78504 7.61344L14.0676 15.0074H11.8994L7.58876 8.97376Z"
        fill="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
