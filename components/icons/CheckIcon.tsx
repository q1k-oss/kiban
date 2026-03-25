import React from "react";

export interface ICheckIconProp {
  style?: React.CSSProperties;
}

export const CheckIcon: React.FC<ICheckIconProp> = ({ style }) => {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M18.5 1L5.90625 16L1 10"
        stroke="#BABABA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
