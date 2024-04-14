import React from 'react';

const Ruler = ({ className }: { className?: string }) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_439_146)">
        <path
          d="M0.964816 8.35971C0.813192 8.44729 0.702562 8.59151 0.657255 8.76064C0.611948 8.92978 0.635674 9.10999 0.723216 9.26163L3.65762 14.3445C3.70098 14.4196 3.75871 14.4854 3.82752 14.5382C3.89632 14.591 3.97485 14.6297 4.05862 14.6521C4.14238 14.6746 4.22975 14.6803 4.31572 14.669C4.4017 14.6576 4.4846 14.6295 4.5597 14.5861L16.3047 7.80531C16.3798 7.76195 16.4456 7.70421 16.4984 7.63541C16.5511 7.56661 16.5899 7.48808 16.6123 7.40431C16.6347 7.32055 16.6404 7.23318 16.6291 7.1472C16.6178 7.06123 16.5896 6.97833 16.5463 6.90323L13.6119 1.82035C13.5685 1.74525 13.5108 1.67943 13.442 1.62665C13.3731 1.57386 13.2946 1.53515 13.2109 1.51271C13.1271 1.49028 13.0397 1.48456 12.9537 1.4959C12.8678 1.50723 12.7849 1.53538 12.7098 1.57875L0.964816 8.35971ZM1.51043 8.76064L12.8623 2.3126L15.6348 7.08203L14.6348 7.80531L13.6119 6.13571L13.04 6.46595L14.0629 8.13539L13.1885 8.64035L12.1655 6.97075L11.5936 7.30099L12.6167 8.97043L11.7432 9.47475L10.7202 7.80515L10.1483 8.13539L11.1714 9.80483L10.297 10.3098L8.94177 8.06515L8.36994 8.39523L9.72517 10.6399L8.85061 11.1448L7.82753 9.47523L7.25569 9.80547L8.27877 11.4749L7.40533 11.9791L6.38242 10.3096L5.81058 10.6399L6.83349 12.3093L5.95909 12.8141L4.93602 11.1447L4.36418 11.4749L5.38725 13.1444L4.31572 13.7298L1.51043 8.76064Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_439_146">
          <rect width="16" height="16" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Ruler;
