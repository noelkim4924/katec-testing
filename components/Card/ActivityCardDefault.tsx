import React, { FC } from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  desc: string;
  img: string;
  date: string;
}

const CardDefault: FC<CardProps> = ({ title, desc, img, date }) => {
  return (
    <div className="w-full bg-white shadow-md overflow-hidden flex flex-col h-[270px]  transition-transform hover:scale-105"> 
     
      
      <div className="h-[60%] w-full flex-shrink-0">
        <Image
          src={img}
          alt={title}
          width={870}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="h-[40%] p-4 flex flex-col justify-between">
        <span className="block text-orange-500 text-sm mb-2">{date}</span>
        <h3 className="text-lg text-gray-800 font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-3">{desc}</p> 
      </div>
    </div>
  );
};

export default CardDefault;
