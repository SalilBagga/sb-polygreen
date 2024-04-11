import clsx from 'clsx';
import Container from 'components/Container';
import BackgroundImage from 'assets/HeroSection/background.webp';

import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import Card from './Card';
import style from './HeroSection.module.css';
import HeroCarousel from './HeroCarousel';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden py-16">
      <img
        src={BackgroundImage}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <Container className="relative z-[1]">
        <p className={style.title}>Our products</p>

        <HeroCarousel />
      </Container>
    </div>
  );
};

export default HeroSection;
