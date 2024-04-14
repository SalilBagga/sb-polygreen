import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import clsx from 'clsx';
import Container from 'components/Container';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from './Sizes/Details';
import MoreDetails from './MoreDetails';
import style from './Product.module.css';
import ProductCarousel from './ProductCarousel';
import Sizes from './Sizes';
import { PRODUCT_DATA, ProductDataType } from '../../utils/data';
import InquireNowButton from 'components/InquireNowButton';

const Product = () => {
  const { productSlug } = useParams();
  const [currentSlug, setCurrentSlug] = useState<string | undefined>();
  const [data, setData] = useState<ProductDataType | null | undefined>(null);

  const dropDown = (
    <Select
      value={currentSlug}
      onValueChange={(slug) => {
        setCurrentSlug(slug);
      }}
    >
      <SelectTrigger
        className={clsx(
          style.selectText,
          'mb-12 rounded-none !border-t-0 border-x-0 border-2 border-[#B8D177] text-start focus:!outline-none focus:!shadow-none'
        )}
      >
        <SelectValue placeholder="Select a product" />
      </SelectTrigger>

      <SelectContent onChange={() => {}}>
        {PRODUCT_DATA.map((item) => (
          <SelectItem className={style.selectText} value={item.slug}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  useEffect(() => {
    setCurrentSlug(productSlug);
  }, [productSlug]);

  useEffect(() => {
    if (productSlug) {
      const newData = PRODUCT_DATA.find((item) => item.slug === currentSlug);
      setData(newData);
    }
  }, [currentSlug]);

  return (
    <Container className="md:py-[108px] py-6 ">
      <div>
        <div className="block md:hidden mb-4">
          {dropDown}
          <ProductCarousel className="mb-12" data={data?.images || []} hideArrow />
          <Sizes data={data?.sizes} className="mb-12 justify-center sm:justify-start" />

          {data?.moreInfo && <MoreDetails spacing="mb-12" details={data.moreInfo} />}
          <div>
            <InquireNowButton
              className="md:px-8 md:py-6 p-3.5 rounded-none mr-2"
              text={`Hi,\nI would like to enquire about ${data?.name}`}
            />
            <Button className="hover:text-white md:px-8 md:py-6 p-3.5 rounded-none border border-solid border-green-100 bg-white text-black">
              Specifications
            </Button>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2 grid-rows-1">
          <ProductCarousel data={data?.images || []} />
          <div className="flex flex-col">
            {dropDown}
            <Sizes data={data?.sizes} className="mb-12" />

            {data?.moreInfo && <MoreDetails spacing="mb-12" details={data.moreInfo} />}
            <div>
              <InquireNowButton
                className="md:px-8 md:py-6 p-3.5 rounded-none mr-2"
                text={`Hi,\nI would like to enquire about ${data?.name}`}
              />
              <Button className="hover:text-white md:px-8 md:py-6 p-3.5 rounded-none border border-solid border-green-100 bg-white text-black">
                Specifications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product;
