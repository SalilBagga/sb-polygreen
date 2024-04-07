import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

const Container = ({
  children,
  fullWidth,
  className,
}: PropsWithChildren<{ fullWidth?: boolean; className?: string }>) => {
  return (
    <div
      className={clsx('w-full mx-auto', className, {
        'max-w-[1280px] md:px-[120px] sm:px-10 px-4': !fullWidth,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
