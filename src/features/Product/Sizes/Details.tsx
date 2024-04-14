import clsx from 'clsx';
import { ProductDataType, SizeDetailsType } from 'utils/data';
import Pipeline from './svg/Pipeline';
import Drop from './svg/Drop';
import Ruler from './svg/Ruler';
import TapeMeasurement from './svg/TapeMeasurement';

const getTitle = (string: SizeDetailsType) => {
  switch (string) {
    case 'length':
      return 'Length';
    case 'thickness':
      return 'Thickness';
    case 'discharge':
      return 'Discharge';
    case 'lay-length':
      return 'Lay Length';

    default:
      return '-';
  }
};

const getIcon = (string: SizeDetailsType) => {
  switch (string) {
    case 'thickness':
      return <Pipeline className="w-[12.52px] h-[9.39px]" />;
    case 'length':
      return <Ruler />;
    case 'discharge':
      return <Drop />;
    case 'lay-length':
      return <TapeMeasurement />;

    default:
      return '-';
  }
};

const Details = ({
  spacing,
  data,
}: {
  spacing?: string;
  data?: ProductDataType['sizes'][0]['details'];
}) => {
  return (
    <div className={clsx(spacing, 'grid grid-cols-2 grid-rows-2 gap-9 mb-12')}>
      {data &&
        data.map((item) => (
          <div className="flex gap-2 flex-row">
            <div className="flex size-[32px] items-center justify-center border  border-solid border-green-40 shrink-0 rounded-full">
              {getIcon(item.slug)}
            </div>
            <div className="flex flex-col">
              <p className="md:mb-4 mb-3.5">{getTitle(item.slug)}</p>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Details;
