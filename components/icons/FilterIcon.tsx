export interface FilterIconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export const FilterIcon = ({
  className,
  strokeWidth = 1.5,
  size = 20,
}: FilterIconProps) => {
  return (
    <svg
      width={size}
      height={(size * 15) / 20} // keep aspect ratio
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.850098 0.851562H18.8501M4.4501 7.35156H15.2501M7.1501 13.8516H12.5501"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
