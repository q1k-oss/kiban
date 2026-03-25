import React from "react";
export interface ISquareIconFillProp {
  size?: number;
  className?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export const SquareIconFill: React.FC<ISquareIconFillProp> = ({
  size = 20,
  className,
  strokeWidth = 1.5,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <rect
        width='18'
        height='18'
        rx="2"
        fill="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
