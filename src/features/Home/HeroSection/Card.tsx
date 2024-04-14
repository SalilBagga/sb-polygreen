import { Button } from '@/components/ui/button';
import Pipe from 'assets/HeroSection/pipe.webp';
import clsx from 'clsx';
import InquireNowButton from 'components/InquireNowButton';
import { Link } from 'react-router-dom';
import routes from 'routes';
import style from './HeroSection.module.css';

export type CardType = {
  title: string;
  image: string;
  description: string[];
  slug: string;
};
const Card = ({
  title = 'Submain Pipe',
  image = Pipe,
  description = [
    'Cost-Effective:',
    'Uniform discharge',
    'Soil erosion',
    'Weed reduction',
    'Quick installation',
    'Easy fertilizer application',
  ],
  slug,
}: CardType) => {
  return (
    <div>
      <div className="flex gap-12 items-center mb-4 flex-col sm:flex-row flex-wrap justify-between">
        <img
          loading="lazy"
          src={image}
          alt=""
          className="object-contain md:max-h-[318px] sm:max-h-[234px] max-h-[134px] mx-auto max-w-[440px]"
        />
        <div className="p-8 shadow-[0px_0px_24px_0px_#F9FAF7] bg-[#FDFFFE99]/60 hidden md:block">
          <ul className="list-disc flex flex-col gap-3">
            {description.map((item) => (
              <li className={style.description}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-4 mx-auto w-fit mb-4">
        <span className={clsx(style.name, 'mb-2 block')}>{title}</span>
        <hr className="w-full border-[1.5px] border-green-90 rounded-full" />
      </div>
      <div className="mx-auto w-fit ">
        <InquireNowButton
          className="md:px-8 md:py-6 p-3.5 rounded-none mr-2"
          text={`Hi,\nI would like to enquire about ${title}`}
        />

        <Button
          className="md:px-8 md:py-6 p-3.5 hover:text-[#FFFFFF] rounded-none border border-solid border-green-100 bg-white text-black"
          asChild
        >
          <Link to={routes.productLink.replace(':productSlug', slug)}>Specifications</Link>
        </Button>
      </div>
      <div className="p-8 shadow-[0px_0px_24px_0px_#F9FAF7] mt-4 bg-[#FDFFFE99]/60 block md:hidden">
        <ul className="list-disc flex flex-col gap-3 text-black-120">
          {description.map((item) => (
            <li className={style.description}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
