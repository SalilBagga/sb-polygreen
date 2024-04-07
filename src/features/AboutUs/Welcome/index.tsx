import React from 'react';
import WelcomeImage from 'assets/Welcome/Welcome.webp';
import Container from 'components/Container';

const Welcome = () => {
  const para = (
    <p className="text-black-130 whitespace-pre-wrap break-words">
      Established in the year 2016, by Rahul Dahad and Viraj Palod, SB Polygreen is counted amongst
      the leading Manufacturers and Suppliers of innovative drip manufacturing solutions
      <br />
      <br />
      Based in Nashik, Maharashtra, we've expanded our footprint across India and into international
      markets.
      <br />
      <br />
      These products are widely acknowledged in the industry for their flawless performance,
      meticulous design and durability. Designed in adherence to the industry standards these
      products are widely promoted by the valuable customers.
      <br />
      <br />
      Our commitment to excellence and reliability in the irrigation sector has positioned us as a
      dependable partner. With a diverse product portfolio, we offer quality solutions tailored to
      your needs
    </p>
  );
  return (
    <Container className="py-[72px] md:pt-[108px]">
      <div className="flex flex-col md:hidden">
        <p className="text-green-90 mb-12 whitespace-pre-wrap break-words text-center">
          Welcome to SB polygreen
        </p>
        <img
          src={WelcomeImage}
          alt="welcome-image"
          className="max-h-[250px] object-contain w-fit mx-auto"
        />
        {para}
      </div>
      <div className="hidden md:grid grid-cols-2 grid-rows-1 gap-6">
        <img src={WelcomeImage} alt="welcome-image" />
        <div>
          <p className="text-green-90 mb-9">Welcome to SB polygreen</p>
          {para}
        </div>
      </div>
    </Container>
  );
};

export default Welcome;
