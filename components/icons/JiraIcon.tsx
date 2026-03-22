import React from "react";

export interface IJiraIcon {
  size?: number;
  className?: string;
  strokeWidth?: number;
}
export const JiraIcon: React.FC<IJiraIcon> = ({
  className = "",
  size = 20,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.1644 0H9.52637C9.52637 2.32677 11.4763 4.22065 13.8718 4.22065H15.6546V5.87102C15.6546 8.19777 17.6045 10.0917 20.0001 10.0917V0.811664C20.0001 0.351723 19.638 0 19.1644 0Z"
        fill="#2684FF"
      />
      <path
        d="M14.4018 4.65234H4.76367C4.76367 6.97911 6.71358 8.87297 9.1092 8.87297H10.8919V10.5504C10.8919 12.8772 12.8419 14.7711 15.2375 14.7711V5.46398C15.2375 5.03112 14.8753 4.65234 14.4018 4.65234Z"
        fill="url(#paint0_linear_1996_36526)"
      />
      <path
        d="M9.63815 9.33398H0C0 11.6607 1.94991 13.5546 4.34551 13.5546H6.12829V15.205C6.12829 17.5317 8.07818 19.4256 10.4738 19.4256V10.1456C10.4738 9.68567 10.0839 9.33398 9.63815 9.33398Z"
        fill="url(#paint1_linear_1996_36526)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1996_36526"
          x1="15.0324"
          y1="4.67569"
          x2="11.0577"
          y2="8.89589"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.176" stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1996_36526"
          x1="10.5366"
          y1="9.36507"
          x2="5.93312"
          y2="13.9767"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.176" stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
