import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { PRODUCT_DATA } from 'utils/data';
import Card from './Card';

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const data = PRODUCT_DATA.filter((item) => item.isHeroProduct);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} className="mb-5">
        <CarouselContent>
          {data.map((item, i) => (
            <CarouselItem>
              <Card {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex gap-2 justify-center items-center">
        {Array(count)
          .fill(0)
          .map((_, index) => index + 1)
          .map((item) => (
            <div
              className={clsx('transition-all rounded-full', {
                'border border-solid border-green-40 bg-customWhite-10  w-2 h-2 md:w-5 md:h-5':
                  item !== current,
                'bg-green-90 h-2 md:h-5 w-10': item === current,
              })}
            />
          ))}
        <div />
      </div>
    </div>
  );
};

export default HeroCarousel;
