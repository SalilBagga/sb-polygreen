import React from 'react';

const Grid = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.665405 0.333984H9.99874V9.66732H0.665405V0.333984ZM14.6654 0.333984H23.9987V9.66732H14.6654V0.333984ZM28.6654 0.333984H37.9987V9.66732H28.6654V0.333984ZM0.665405 14.334H9.99874V23.6673H0.665405V14.334ZM14.6654 14.334H23.9987V23.6673H14.6654V14.334ZM28.6654 14.334H37.9987V23.6673H28.6654V14.334ZM0.665405 28.334H9.99874V37.6673H0.665405V28.334ZM14.6654 28.334H23.9987V37.6673H14.6654V28.334ZM28.6654 28.334H37.9987V37.6673H28.6654V28.334Z"
        fill="#859E44"
      />
    </svg>
  );
};

export default Grid;