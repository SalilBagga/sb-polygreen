import { Button } from '@/components/ui/button';
import clsx from 'clsx';

const Sizes = ({
  className,
  data,
  onClick,
}: {
  className?: string;
  data?: string[];
  onClick?: (item: String) => void;
}) => {
  return (
    <div className={clsx(className, 'flex flex-wrap gap-2 mb-12')}>
      {data?.map((item) => (
        <Button
          onClick={() => {
            if (onClick) onClick(item);
          }}
          className="bg-white border border-solid border-green-30 text-2xl font-medium leading-[29.05px] text-[#4D4D4D] focus:text-white focus:bg-green-100 hover:text-white hover:bg-green-100 shadow-[0px_1px_1px_0px_#B8D177]"
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Sizes;
