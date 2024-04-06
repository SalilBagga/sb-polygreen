import React, { PropsWithChildren } from 'react';
import Leaf from 'assets/RevolutionizingFarming/Leaf.webp';

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-[524px] bg-green-20 px-6 py-12 sm:p-12 rounded-3xl border-b-green-100 border-b border-solid relative">
      <img
        src={Leaf}
        alt="leaf"
        className="absolute -left-3 -top-4 md:-left-7 md:-top-9  w-[74.5px] h-[42.1px] md:w-[103px] md:h-[58.2px]"
      />
      {children}
    </div>
  );
};

export default Card;
