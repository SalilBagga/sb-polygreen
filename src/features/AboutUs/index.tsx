import React from 'react';
import Welcome from './Welcome';
import VisionMission from './VisionMission';
import Founders from './Founders';
import WhyChooseUs from 'features/Home/WhyChooseUs';

const AboutUs = () => {
  return (
    <div>
      <Welcome />
      <VisionMission />
      <Founders />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
