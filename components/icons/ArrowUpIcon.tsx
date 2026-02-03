import React from "react";

export interface IArrowUpIconProp {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpIcon: React.FC<IArrowUpIconProp> = ({
  size = 20,
  className,
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      width={size}
      height={size * (18 / 14)}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.5 7.5L7 0.5M7 0.5L13 7.5M7 0.5V17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
