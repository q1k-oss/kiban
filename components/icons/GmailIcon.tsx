import React from "react";

export interface IGmailIcon {
  size?: number;
  className?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export const GmailIcon: React.FC<IGmailIcon> = ({
  className = "",
  size = 20,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M1.49961 19.25H5.00156V10.7508L0 7.00391V17.7547C0 18.584 0.674609 19.25 1.49961 19.25Z"
        fill="#4285F4"
      />
      <path
        d="M16.998 19.25H20.5C21.3293 19.25 21.9996 18.5754 21.9996 17.7504V7.00391L16.998 10.7551"
        fill="#34A853"
      />
      <path
        d="M16.998 4.253V10.7542L21.9996 7.003V5.00495C21.9996 3.1487 19.8813 2.09167 18.3988 3.20456"
        fill="#FBBC04"
      />
      <path
        d="M5.00195 10.7508V4.25391L11.0004 8.75273L16.9988 4.25391V10.7551L11.0004 15.2539"
        fill="#EA4335"
      />
      <path
        d="M0 5.00105V7.00339L5.00156 10.7546V4.25339L3.60078 3.20066C2.11406 2.08777 0 3.1448 0 5.00105Z"
        fill="#C5221F"
      />
    </svg>
  );
};
