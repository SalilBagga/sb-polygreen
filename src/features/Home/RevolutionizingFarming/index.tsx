import Container from 'components/Container';
import Card from './Card';
import clsx from 'clsx';
import style from './RevolutionizingFarming.module.css';

const Revolutionizing = () => {
  return (
    <Container className="py-14">
      <h3 className={clsx(style.title1, 'text-center mb-2.5 text-black-140 underline')}>
        Revolutionizing Farming Practices for
      </h3>
      <h4 className={clsx(style.years, 'text-center text-green-90 underline mb-14')}>9 years</h4>
      <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 gap-14 sm:gap-4 md:gap-14">
        <Card
          title="I just wanted to share a quick note and let you guys know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all "
          by="- Yogesh Jadhav"
        />
        <Card
          title="I just wanted to share a quick note and let you guys know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all "
          by="- Yogesh Jadhav"
        />
      </div>
    </Container>
  );
};

export default Revolutionizing;
