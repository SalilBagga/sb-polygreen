import React from 'react';

const MoreDetails = ({ spacing, details }: { spacing?: string; details: string }) => {
  return (
    <div className={spacing}>
      <p className="mb-4">More information</p>
      <p>{details}</p>
    </div>
  );
};

export default MoreDetails;
