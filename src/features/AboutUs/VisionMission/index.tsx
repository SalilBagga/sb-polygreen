import Container from 'components/Container';
import React from 'react';
import RicePlant from 'assets/VisionMission/RicePlant.webp';
import Team from 'assets/VisionMission/Team.webp';
import clsx from 'clsx';
import style from './VisionMission.module.css';

const VisionMission = () => {
  return (
    <Container className="py-14 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-6">
      <div className="p-6 border-t-0 border-l-0 border-r-[1px] border-b-[2px] border-solid border-green-80 rounded-3xl h-fit">
        <p className={clsx(style.cardTitle, 'text-center mb-6 text-green-90')}>Vision</p>
        <p className={clsx(style.cardSubtitle, 'mb-6')}>
          SB Polygreen envisions maximizing sustainable irrigation across farming landscapes.
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <img
            loading="lazy"
            src={RicePlant}
            alt=""
            className="w-full object-cover md:object-contain max-h-[195px] rounded-3xl"
          />
          <div className={style.description}>
            <p className="mb-6">Only 36.7% of land currently benefits from micro-irrigation.</p>
            <p className="text-black-130">
              By providing the{' '}
              <span className="text-green-90">
                {' '}
                highest customer satisfaction and delivering an economical range of micro-irrigation
                products,
              </span>{' '}
              we aim to fulfill our commitment to quality, relying on the strength of our greatest
              asset. Our People.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 border-t-0 border-l-0 border-r-[1px] border-b-[2px] border-solid border-green-80 rounded-3xl md:mt-[201px]">
        <p className={clsx(style.cardTitle, 'text-center mb-6 text-green-90')}>Mission</p>
        <p className={clsx(style.cardSubtitle, 'mb-6')}>
          Stand out as the premier manufacturer of top-quality and precise micro- irrigation
          products in India
        </p>
        <div className="flex flex-col gap-5">
          <img
            loading="lazy"
            src={Team}
            alt=""
            className="w-full object-cover md:object-contain max-h-[208px] rounded-3xl"
          />
          <div className={style.description}>
            <p className="text-black-130">
              The success of each SB Polygreen employee is intertwined with the success of our
              customers. We are dedicated to{' '}
              <span className="text-green-90">
                elevating our customer's achievements through industry-standard responsiveness,
                quality, and service.
              </span>{' '}
              Striving for excellence in every facet of our business, we leverage our core
              competencies and cultivate a culture of trust, teamwork, and responsibility.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VisionMission;
