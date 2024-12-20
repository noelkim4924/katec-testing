// components/Home/NewsHighlights/NewsHighlights.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NewsCardHighlight from '@/components/Home/NewsHighlights/NewsCardHighlightDefault';
import { NewsItem } from '@/types/news';
import Image from 'next/image'; // 올바른 임포트

const NewsHighlights: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/data/news.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: NewsItem[] = await response.json();
        setNews(data);
      } catch (error: unknown) { // ✅ 'unknown' 타입 사용
        if (error instanceof Error) {
          console.error('Failed to fetch news:', error.message);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      }
    };
  
    fetchNews();
  }, []);

  useEffect(() => {
    if (!autoSlide || news.length === 0) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
        setFade(true);
      }, 500);
    }, 6000); // 6초마다 슬라이드

    return () => clearInterval(interval);
  }, [autoSlide, news.length]);

  const closeModal = () => setSelectedNews(null);

  const openModal = (item: NewsItem) => {
    setSelectedNews(item);
    setAutoSlide(false); // 모달 열 때 자동 슬라이드 비활성화
  };

  return (
    <div className="w-[100%] sm:w-[79%] mx-auto mb-48 bg-[#f7f6fb] rounded-lg p-4">
      <Link href="/news" passHref>
        <h2
          className="text-2xl font-bold text-center text-gray-800 mb-6 hover:text-blue-600 hover:underline cursor-pointer"
          title="Go to News Page"
        >
          UPCOMING NEWS
        </h2>
      </Link>
      <div
        className={`transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => openModal(news[currentIndex])}
      >
        <div className="w-full flex items-center justify-center">
          {news.length > 0 && (
            <NewsCardHighlight
              title={news[currentIndex].title}
              desc={news[currentIndex].desc}
              date={news[currentIndex].date}
              img={news[currentIndex].img}
            />
          )}
        </div>
      </div>

      {/* 모달 */}
      {selectedNews && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100006]"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 relative overflow-y-auto"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 이미지 섹션 */}
            <div className="mb-4 flex justify-center">
              <div className="relative w-700 h-400"> {/* 고정 크기로 부모 div 설정 */}
                <Image
                  src={selectedNews.img}
                  alt={selectedNews.title}
                  className="rounded-md"
                  width={700} // 원하는 너비
                  height={400} // 원하는 높이
                />
              </div>
            </div>
            {/* 텍스트 섹션 */}
            <div
              className="overflow-y-auto"
              style={{
                maxHeight: 'calc(90vh - 550px)',
              }}
            >
              <h3 className="text-2xl font-bold text-gray-800">{selectedNews.title}</h3>
              <p className="mt-4 text-gray-600">{selectedNews.desc}</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>{selectedNews.date}</p>
                <p>By {selectedNews.author}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsHighlights;
