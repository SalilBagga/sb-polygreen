import React from 'react';

const Drop = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 10.0004C12.5 12.762 10.7616 14.5004 8 14.5004C5.23844 14.5004 3.5 12.762 3.5 10.0004C3.5 7.03696 6.72594 3.03633 7.71531 1.87914C7.75052 1.83803 7.7942 1.80502 7.84337 1.78239C7.89254 1.75976 7.94603 1.74805 8.00016 1.74805C8.05428 1.74805 8.10777 1.75976 8.15694 1.78239C8.20611 1.80502 8.2498 1.83803 8.285 1.87914C9.27406 3.03633 12.5 7.03696 12.5 10.0004Z"
        stroke="black"
        stroke-miterlimit="10"
      />
      <path
        d="M10.75 10.25C10.75 10.8467 10.5129 11.419 10.091 11.841C9.66903 12.2629 9.09674 12.5 8.5 12.5"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Drop;
