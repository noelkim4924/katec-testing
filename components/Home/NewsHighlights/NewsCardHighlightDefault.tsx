// components/Home/NewsHighlights/NewsCardHighlightDefault.tsx

import React, { FC } from "react";
import Image from "next/image";
//import { NewsItem } from "@/types/news";

interface NewsCardHighlightDefaultProps {
  title: string;
  desc: string;
  date: string;
  img: string;
}

const NewsCardHighlightDefault: FC<NewsCardHighlightDefaultProps> = ({
  title,
  desc,
  date,
  img,
}) => {
  return (
    <div className="px-5 bg-[#f7f6fb] w-[1280px] h-[290px] shadow-lg hover:scale-105 transition-transform cursor-pointer">
      {/* 그리드 설정 */}
      <div className="grid grid-cols-[3fr_1fr_3fr] grid-rows-[1fr_1fr_1fr] gap-2 h-full">
        {/* 타이틀 */}
        <div className="col-span-1 row-span-1 mt-5">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>

        {/* 날짜 */}
        <div className="col-span-1 row-span-1 mt-5 ">
          <p className="text-base text-gray-500">{date}</p>
        </div>

        {/* 이미지 */}
        <div className="col-span-1 row-span-4 relative w-full h-full">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* 디스크립션 */}
        <div className="col-span-2 row-span-2 mt-10">
          <p className="text-lg text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCardHighlightDefault;
