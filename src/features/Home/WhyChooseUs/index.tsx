import Container from 'components/Container';
import Card, { CardType } from './Card';
import Customer from './Svg/Customer';
import Global from './Svg/Global';
import Grid from './Svg/Grid';
import Idea from './Svg/Idea';
import Medal from './Svg/Medal';
import Support from './Svg/Support';
import style from './WhyChooseUs.module.css';
import clsx from 'clsx';

const WhyChooseUs = () => {
  const data: CardType[] = [
    {
      icon: <Grid />,
      title: 'Diverse Product Range',
      description:
        'From Flat Drip Irrigation Pipes to Rain Hose Pipes, Submain Pipes, and Hydrogol (Round) Pipes, our comprehensive product lineup caters to varied agricultural needs, providing efficient, cot-effective, and sustainable solutions',
    },
    {
      icon: <Idea />,
      title: 'Innovative at the core',
      description:
        'SB Polygreen thrives on innovation, integrating cutting-edge technology and industry-best practices to deliver products that set new standards in micro-irrigation.',
    },
    {
      icon: <Support />,
      title: 'Expert Micro-Irrigation Support',
      description:
        'Choose SB Polygreen as your trusted partner in micro-irrigation where expertise, innovation, and customer satisfaction converge to cultivate success in every field.',
    },
    {
      icon: <Customer />,
      title: 'Customer centric approach',
      description:
        'Your success is our success. We foster long-term relationships by offering unparalleled customer support, ensuring your satisfaction with every product and interaction.',
    },
    {
      icon: <Medal />,
      title: 'Quality assurance',
      description:
        'Our adherence to ISO 9001:2015 parameters and a team of highly trained professionals guarantee superior qualit in every product, providing you with reliable and durable solutions.',
    },
    {
      icon: <Global />,
      title: 'Global reach',
      description:
        'Operating from Nashik, Maharashtra, we have expanded our footprint nationally and internationally, catering to a diverse clientele with a commitment to excellence.',
    },
  ];
  return (
    <Container className="py-14">
      <p className={clsx(style.title, 'mb-6 text-center underline')}>Why choose us?</p>
      <p className={clsx(style.subTitle, 'mb-14 text-center')}>Trustworthy irrigation solutons</p>

      <div className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-14">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default WhyChooseUs;
