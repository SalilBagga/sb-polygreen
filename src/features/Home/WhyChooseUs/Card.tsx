import React from 'react';
import style from './WhyChooseUs.module.css';
import clsx from 'clsx';

export type CardType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const Card = ({ icon, title, description }: CardType) => {
  return (
    <div className="flex flex-col items-center text-center text-green-130">
      <div className="mb-7">{icon}</div>
      <p className={clsx(style.cardTitle, 'mb-3')}>{title}</p>
      <hr className="w-full h-[1px] border-green-120 mb-5" />
      <p className={style.cardSubtitle}>{description}</p>
    </div>
  );
};

export default Card;
