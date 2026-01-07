import React from "react";
export interface CreateAgentIconProps {
  className?: string;
  size?: number;
}

export const CreateAgentIcon: React.FC<CreateAgentIconProps> = ({
  className,
  size = 135,
}) => {
  return (
    <svg
      width={size}
      height={(size * 109) / 135}
      viewBox="0 0 135 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <rect width="135" height="109" fill="url(#pattern0_873_5585)" />
      <defs>
        <pattern
          id="pattern0_873_5585"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_873_5585"
            transform="matrix(0.00690092 0 0 0.00854701 0.0272871 0)"
          />
        </pattern>
        <image
          id="image0_873_5585"
          width="137"
          height="117"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
