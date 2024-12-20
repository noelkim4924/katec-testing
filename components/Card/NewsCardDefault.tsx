// components/Card/NewsCardDefault.tsx

import React, { FC } from "react";
import Image from "next/image";
//import { NewsItem } from "@/types/news"; // NewsItem 타입 임포트

interface NewsCardProps {
  title: string;
  desc: string;
  date: string;
  author: string;
  img: string;
  width?: string; // 가로폭 지정
  height?: string; // 세로폭 지정
}

const NewsCardDefault: FC<NewsCardProps> = ({
  title,
  desc,
  date,
  author,
  img,
  width = "100%", // 기본값 설정
  height = "auto", // 기본값 설정
}) => {
  return (
    <div
      className="bg-[#f7f6fb] p-3 shadow-lg rounded-lg hover:scale-105 transition-transform cursor-pointer"
      style={{
        width,
        height,
        maxWidth: "105%",
      }}
    >
      <div className="flex flex-col md:flex-row-reverse ">
        {/* 우측: 이미지 */}
        <div className="flex-shrink-0 w-full md:w-1/12 h-28 overflow-hidden rounded-md">
          <Image
            src={img}
            alt={title}
            width={200}
            height={200}
            className="object-contain w-full h-full"
          />
        </div>
        {/* 좌측: 텍스트 */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="mt-1 text-gray-600 text-sm">{desc}</p>
          <div className="mt-2 text-xs text-gray-500">
            <p>{date}</p>
            <p>By {author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCardDefault;
