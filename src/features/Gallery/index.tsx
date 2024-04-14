import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Prod1 from 'assets/Gallery/Products/product-1.webp';
import Prod2 from 'assets/Gallery/Products/product-2.webp';
import Prod3 from 'assets/Gallery/Products/product-3.webp';
import Infra1 from 'assets/Gallery/Infrastructure/infra-1.webp';
import Infra2 from 'assets/Gallery/Infrastructure/infra-2.webp';
import Infra3 from 'assets/Gallery/Infrastructure/infra-3.webp';
import Container from 'components/Container';
import styles from './Gallery.module.css';
import clsx from 'clsx';

const Products = [Prod1, Prod2, Prod3];
const Infrastructure = [Infra1, Infra2, Infra3];

const Gallery = () => {
  return (
    <Container>
      <p className={clsx('mb-16', styles.title)}>Our infrastructure</p>
      <Carousel className="w-full md:px-[64px] mb-20 md:mb-[108px]">
        <CarouselContent>
          {Infrastructure.map((item, index) => (
            <CarouselItem key={index}>
              <img src={item} alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className={clsx('mb-16', styles.title)}>Our products</p>
      <Carousel className="w-full md:px-[64px] mb-20 md:mb-[108px]">
        <CarouselContent>
          {Products.map((item, index) => (
            <CarouselItem key={index}>
              <img src={item} alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};

export default Gallery;
