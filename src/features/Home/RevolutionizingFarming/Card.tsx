import React, { PropsWithChildren } from 'react';
import Leaf from 'assets/RevolutionizingFarming/Leaf.webp';
import style from './Card.module.css';
import clsx from 'clsx';

const Card = ({ title, by }: { title: string; by: string }) => {
  return (
    <div className="max-w-[524px] bg-green-20 px-6 py-12 sm:p-12 rounded-3xl border-b-green-100 border-b border-solid relative">
      <img
        loading="lazy"
        src={Leaf}
        alt="leaf"
        className="absolute -left-3 -top-4 md:-left-7 md:-top-9  w-[74.5px] h-[42.1px] md:w-[103px] md:h-[58.2px]"
      />
      <p className={clsx(style.title, 'mb-6')}>{title}</p>
      <span className={clsx(style.by, 'text-end block')}>{by}</span>
    </div>
  );
};

export default Card;
