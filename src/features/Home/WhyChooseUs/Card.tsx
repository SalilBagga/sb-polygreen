import React from 'react';
export type CardType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const Card = ({ icon, title, description }: CardType) => {
  return (
    <div className="flex flex-col items-center text-center text-green-130">
      <div
        className="mb-7"
        //   className="mb-7 w-[32px] h-[32px]"
      >
        {icon}
      </div>
      <p className="mb-3">{title}</p>
      <hr className="w-full h-[1px] border-green-120 mb-5" />
      <p>{description}</p>
    </div>
  );
};

export default Card;
