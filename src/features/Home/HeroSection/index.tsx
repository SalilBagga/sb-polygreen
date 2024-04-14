import BackgroundImage from 'assets/HeroSection/background.webp';
import Container from 'components/Container';

import HeroCarousel from './HeroCarousel';
import style from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden py-16">
      <img
        loading="lazy"
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
