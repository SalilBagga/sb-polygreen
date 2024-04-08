import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCT_DATA } from './data';
import Container from 'components/Container';
import { Button } from '@/components/ui/button';
import Pipeline from './Pipeline';
import clsx from 'clsx';

const Product = () => {
  const { productSlug } = useParams();

  const data = PRODUCT_DATA.find((item) => item.slug === productSlug);
  const dropDown = <span className="mb-12 block">drop down</span>;

  return (
    <Container className="md:py-[108px] py-6 ">
      <div>
        <p className="text-base font-medium leading-[19.36px] mb-4 md:mb-12">
          Our products / {data?.name}
        </p>
        <div className="block md:hidden mb-4">drop down</div>
        <div className="hidden md:grid grid-cols-2 grid-rows-1">
          <div>bnhj</div>
          <div className="flex flex-col">
            {dropDown}
            <Sizes data={data?.size} spacing="mb-12" />
            <Details spacing="mb-12" data={data?.details} />
            <MoreDetails
              spacing="mb-12"
              details=" I just wanted to share a quick note and let you guys know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all"
            />
            <div>
              <Button className="md:px-8 md:py-6 p-3.5 rounded-none mr-2">Inquire now</Button>
              <Button className="md:px-8 md:py-6 p-3.5 rounded-none border border-solid border-green-100 bg-white text-black">
                Specifications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Details = ({
  spacing,
  data,
}: {
  spacing?: string;
  data?: {
    name: string;
    value: string;
  }[];
}) => (
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

const Sizes = ({
  spacing,
  data,
  onClick,
}: {
  spacing?: string;
  data?: string[];
  onClick?: (item: String) => void;
}) => (
  <div className={clsx(spacing, 'flex flex-wrap gap-2 mb-12')}>
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
const MoreDetails = ({ spacing, details }: { spacing?: string; details: string }) => (
  <div className={spacing}>
    <p className="mb-4">More information</p>
    <p>{details}</p>
  </div>
);

export default Product;
