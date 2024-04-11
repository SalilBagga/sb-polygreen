import clsx from 'clsx';
import React from 'react';
import Pipeline from './Pipeline';

const Details = ({
  spacing,
  data,
}: {
  spacing?: string;
  data?: {
    name: string;
    value: string;
  }[];
}) => {
  return (
    <div className={clsx(spacing, 'flex flex-row md:flex-col gap-9 mb-12')}>
      {data?.map((item) => (
        <div className="flex gap-2 flex-row">
          <div className="flex size-[32px] items-center justify-center border  border-solid border-green-40 shrink-0 rounded-full">
            <Pipeline className="w-[12.52px] h-[9.39px]" />
          </div>
          <div className="flex flex-col">
            <p className="md:mb-4 mb-3.5">{item.name}</p>
            <p>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
