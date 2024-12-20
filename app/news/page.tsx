// pages/news/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import NewsCardDefault from '@/components/Card/NewsCardDefault';
import Image from 'next/image';
import { NewsItem } from '@/types/news'; // NewsItem 타입 임포트

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const closeModal = () => setSelectedNews(null);

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
          setError('뉴스 데이터를 불러오는 데 실패했습니다.');
        } else {
          console.error('An unexpected error occurred:', error);
          setError('예기치 않은 오류가 발생했습니다.');
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-10 md:px-20 bg-[#f7f6fb] pt-[100px] min-h-screen">
      {/* Header */}
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">NEWS</h2>
      </div>

      {/* 카드 리스트 */}
      <div className="w-full max-w-6xl">
        <div className="grid gap-6 mt-8 sm:grid-cols-1 lg:grid-cols-1 w-full">
          {news.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedNews(item)}
              className="cursor-pointer"
            >
              {/* NewsCardDefault 사용 */}
              <NewsCardDefault
                title={item.title}
                desc={item.desc}
                date={item.date}
                author={item.author}
                img={item.img}
                width="100%" // 카드 크기
                height="auto" // 자동 높이
              />
            </div>
          ))}
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
            <div className="relative w-full max-w-md h-auto"> {/* 부모 컨테이너 크기 조절 */}
              <Image
                src={selectedNews.img}
                alt={selectedNews.title}
                layout="responsive" // 반응형 레이아웃 사용
                width={500} // 원하는 너비
                height={300} // 원하는 높이
                objectFit="contain" // 이미지가 전체적으로 보이도록 설정
                className="rounded-md"
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

export default NewsPage;
