import React from "react";

export interface IFileTXTIcon {
  size?: number;
  className?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export const FileTXTIcon: React.FC<IFileTXTIcon> = ({
  className = "",
  size = 26,
  strokeWidth = 1.2,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      <path
        d="M14.8343 2H6.16764C5.59301 2 5.04191 2.22828 4.63558 2.63461C4.22925 3.04093 4.00098 3.59203 4.00098 4.16667V21.5C4.00098 22.0746 4.22925 22.6257 4.63558 23.0321C5.04191 23.4384 5.59301 23.6667 6.16764 23.6667H19.1676C19.7423 23.6667 20.2934 23.4384 20.6997 23.0321C21.106 22.6257 21.3343 22.0746 21.3343 21.5V8.5M14.8343 2C15.1772 1.99945 15.5169 2.06674 15.8337 2.198C16.1505 2.32927 16.4383 2.52191 16.6803 2.76484L20.5673 6.65184C20.8109 6.89397 21.0041 7.18196 21.1357 7.49918C21.2674 7.8164 21.3349 8.15655 21.3343 8.5M14.8343 2V7.41667C14.8343 7.70399 14.9484 7.97954 15.1516 8.1827C15.3548 8.38587 15.6303 8.5 15.9176 8.5L21.3343 8.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 13C1 11.8954 1.89543 11 3 11H21.4V20H3C1.89543 20 1 19.1046 1 18V13Z"
        fill="#6F8FAF"
      />
      <path
        d="M6.874 17.8008V14.3268H5.656V13.6008H8.992V14.3268H7.774V17.8008H6.874ZM9.34239 17.8008L10.6744 15.6708L9.31839 13.6008H10.3624L11.2564 14.9628L12.0544 13.6008H13.0744L11.7484 15.7128L13.1164 17.8008H12.0724L11.1724 16.4148L10.3624 17.8008H9.34239ZM14.6611 17.8008V14.3268H13.4431V13.6008H16.7791V14.3268H15.5611V17.8008H14.6611Z"
        fill="white"
      />
    </svg>
  );
};
