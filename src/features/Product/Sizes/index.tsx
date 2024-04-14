import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { ProductDataType } from 'utils/data';
import Details from './Details';

const Sizes = ({ className, data }: { data?: ProductDataType['sizes']; className?: string }) => {
  const [currentTab, setCurrentTab] = useState('');
  useEffect(() => {
    if (data) {
      setCurrentTab(data[0].name);
    }
  }, [data]);
  return (
    <div>
      <div className={clsx(className, 'flex flex-wrap gap-2 mb-12')}>
        {data?.map((item) => (
          <Button
            className={clsx(
              'bg-white border border-solid border-green-30 text-2xl font-medium leading-[29.05px] text-[#4D4D4D]  hover:text-white hover:bg-green-100 shadow-[0px_1px_1px_0px_#B8D177]',
              {
                'text-white bg-green-100': currentTab === item.name,
              }
            )}
            onClick={() => {
              setCurrentTab(item.name);
            }}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <Details spacing="mb-12" data={data?.find((item) => item.name === currentTab)?.details} />
    </div>
  );
};

export default Sizes;
