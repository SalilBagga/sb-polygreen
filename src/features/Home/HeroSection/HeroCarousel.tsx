import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Pipe from 'assets/HeroSection/pipe.webp';
import { useEffect, useState } from 'react';
import Card, { CardType } from './Card';
import clsx from 'clsx';

const data: CardType[] = [
  {
    title: 'Flat-drip pipe',
    image: Pipe,
    description: [
      'Cost-Effective:',
      'Uniform discharge',
      'Soil erosion',
      'Weed reduction',
      'Quick installation',
      'Easy fertilizer application',
    ],
    slug: 'flat-drip-pipe',
  },
  {
    title: 'Rain pipe',
    image: Pipe,
    description: [
      '1Cost-Effective:',
      '2Uniform discharge',
      '3Soil erosion',
      '4Weed reduction',
      '5Quick installation',
      '6Easy fertilizer application',
    ],
    slug: 'rain-pipe',
  },
  {
    title: 'Hydrogol pipe',
    image: Pipe,
    description: [
      '1Cost-Effective:',
      '2Uniform discharge',
      '3Soil erosion',
      '4Weed reduction',
      '5Quick installation',
      '6Easy fertilizer application',
    ],
    slug: 'hydrogol-pipe',
  },
  {
    title: 'Submain pipe',
    image: Pipe,
    description: [
      '1Cost-Effective:',
      '2Uniform discharge',
      '3Soil erosion',
      '4Weed reduction',
      '5Quick installation',
      '6Easy fertilizer application',
    ],
    slug: 'submain-pipe',
  },
];

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
                'border border-solid border-green-40 bg-white-10  w-2 h-2 md:w-5 md:h-5':
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
