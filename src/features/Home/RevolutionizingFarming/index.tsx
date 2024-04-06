import Container from 'components/Container';
import Card from './Card';

const Revolutionizing = () => {
  return (
    <Container className="py-14">
      <h3 className="text-center mb-2.5 text-[32px] font-normal leading-[40.9px] text-black-140 underline">
        Revolutionizing Farming Practices for
      </h3>
      <h4 className="text-center text-5xl font-normal leading-[61.34px] text-green-90 underline mb-14">
        9 years
      </h4>
      <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 gap-14 sm:gap-4 md:gap-14">
        <Card>
          <p className="mb-6">
            I just wanted to share a quick note and let you guys know that you guys do a really good
            job. I’m glad I decided to work with you. It’s really great how easy your websites are
            to update and manage. I never have any problem at all
          </p>
          <span className="text-end block">- Yogesh Jadhav</span>
        </Card>
        <Card>
          <p className="mb-6">
            I just wanted to share a quick note and let you guys know that you guys do a really good
            job. I’m glad I decided to work with you. It’s really great how easy your websites are
            to update and manage. I never have any problem at all
          </p>
          <span className="text-end block">- Yogesh Jadhav</span>
        </Card>
      </div>
    </Container>
  );
};

export default Revolutionizing;
