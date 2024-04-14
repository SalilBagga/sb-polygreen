import Container from 'components/Container';
import React from 'react';
import Rahul from 'assets/Founder/Rahul.webp';
import RahulMini from 'assets/Founder/Rahul-mini.webp';
import Viraj from 'assets/Founder/Viraj.webp';
import VirajMini from 'assets/Founder/Viraj-mini.webp';
import style from './Founders.module.css';
import clsx from 'clsx';

const data = [
  {
    name: 'Rahul Dahad',
    imgBig: Rahul,
    imgSmall: RahulMini,
    description: `Rahul Dahad, an accomplished Polymer Engineer from Maharashtra Institute of Technology, Pune, and an established entrepreneur, is the visionary behind SB Polygreen, Inspired by the esteemed businessman Mr. Sunil Lathi in Maharashtra, India, Rahul entered the polymer industry in 2010, leaving an impactful legacy in companies like VIP bags, Samsonite, and RTF India.\n\nIn 2016, drawing from his wealth of experience, Rahul founded SB Polygreen, driven by the inspiration to innovate in micro-irrigation manufacturing. His dynamic leadership has steered the company towards excellence, making SB Polygreen a hallmark of quality and precision in the industry`,
  },
  {
    name: 'Viraj Palod',
    imgBig: Viraj,
    imgSmall: VirajMini,
    description: `Viraj Palod, a Mechanical Engineer from Pune University, co-founded SB Polygreen, bringing rich entrepreneurial experience from diverse family businesses since 2010. Guided by Mr. Sunil Lathi's wisdom, a prominent figure in Maharashtra, Viraj entered the drip irrigation industry.\n\nWith Rahul Dahad, Viraj's commitment to quality and innovation has shaped SB Polygreen since its 2016 inception. Recognizing that customer loyalty thrives on superior quality and dedicated support. Viraj ensures SB Polygreen not only delivers optimal solutions but also provides unparalleled assistance.\n\nViraj's vision extends beyond transactions, aiming to build lasting partnerships by offering customers a reliable ally in their pursuit of efficient and sustainable micro-irrigation practices`,
  },
];
const Founders = () => {
  return (
    <Container>
      <div className="md:hidden block">
        <p className="mb-12 sm:mb-16">FOUNDERS1</p>
        {data.map((item) => (
          <div className="mb-6">
            <div className="sm:hidden flex flex-col sm:flex-row">
              <p className={clsx(style.name, 'text-green-90 mb-6')}>{item.name}</p>
              <img loading="lazy" src={item.imgSmall} alt="" className="mb-6" />
              <p className={clsx(style.about, 'whitespace-pre-wrap break-words')}>
                {item.description}
              </p>
            </div>
            <div className="hidden sm:flex flex-row items-start gap-6">
              <img
                loading="lazy"
                src={item.imgBig}
                alt=""
                className="object-contain max-w-[212px]"
              />
              <div>
                <p className={clsx(style.name, 'text-green-90 mb-6')}>{item.name}</p>
                <p className={clsx(style.about, 'whitespace-pre-wrap break-words')}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        <div className="flex gap-6">
          <div>
            {data.map((item) => (
              <div className="border-b-green-100 border-b border-solid flex gap-6 mb-6 items-end">
                <img
                  loading="lazy"
                  src={item.imgBig}
                  alt=""
                  className="shrink-0 object-contain max-w-[349px]"
                />
                <div className="flex flex-col justify-end gap-16">
                  <p className={clsx(style.about, 'whitespace-pre-wrap break-words')}>
                    {item.description}
                  </p>
                  <p className={clsx(style.name, 'text-left text-green-90')}>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[128px] relative shrink-0">
            <p
              style={{
                fontFamily: 'Sanchez',
              }}
              className="text-[170px] font-normal leading-[217.6px] tracking-[0.14em] text-left whitespace-pre-wrap break-normal text-green-30 -rotate-90 absolute left-[-476px] bottom-[459px]"
            >
              FOUNDERS
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Founders;
