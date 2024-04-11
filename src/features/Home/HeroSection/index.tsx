import Pipe from 'assets/HeroSection/pipe.webp';
import clsx from 'clsx';
import Container from 'components/Container';

import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import Card from './Card';

const data = [
  {
    title: 'Sublimepipe Card',
    image: Pipe,
    description: ['abc', '123', 'def', '456'],
  },
];
const HeroSection = () => {
  return (
    <div className="h-[100dvh] bg-red-700 relative overflow-hidden py-16">
      <img
        src="https://picsum.photos/200/300"
        alt=""
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="bg-[linear-gradient(180deg,#FDFFFE_0%,rgba(253,255,254,0)_14.27%,rgba(253,255,254,0)_90.74%,#FDFFFE_100%)] absolute left-0 top-0 w-full h-full" />
      <Container className="relative z-[1]">
        <p className="text-center">Our products</p>
        <div>
          <Card />
          <div className="mt-2 hidden items-center md:flex">
            <button
              // disabled={isLeftArrowDisabled}
              id="buttonPrev"
              className={clsx(
                'flex items-center justify-center !rounded-full p-0.5'
                // { "bg-surface-200 !text-onSurface-400": isLeftArrowDisabled }
              )}
            >
              <ArrowLeftCircle strokeWidth={2.5} fontSize={20} />
            </button>
            <button
              id="buttonNext"
              // disabled={isRightArrowDisabled}
              className={clsx(
                'flex items-center justify-center !rounded-full p-0.5'
                // { "bg-surface-200 !text-onSurface-400": isRightArrowDisabled }
              )}
            >
              <ArrowRightCircle strokeWidth={2.5} fontSize={20} />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
