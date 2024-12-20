'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import CardDefault from '@/components/Card/ActivityCardDefault';
import Modal from '@/components/Modal/Modal';
import { Post } from '@/types/post'; // Post 인터페이스 임포트

const ActivityHighlights: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/data/activity.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        // 맨 끝으로 가면 처음으로 돌아가기
        if (
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 3000); // 3초마다 슬라이드

    return () => clearInterval(interval);
  }, [autoSlide]);

  const openModal = (img: string) => {
    setSelectedImage(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-[90%] sm:w-[71%] mx-auto mb-12 bg-[#f7f6fb] rounded-lg p-8">
      <Link href="/activity" passHref>
        <h2
          className="text-2xl font-bold text-center text-gray-800 mb-6 hover:text-blue-600 hover:underline cursor-pointer"
          title="Go to Activity Page"
        >
          ACTIVITY
        </h2>
      </Link>

      <div className="relative">
        {/* 왼쪽 화살표 */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full p-4 shadow-lg hover:bg-gray-300 focus:outline-none text-2xl"
          onClick={() => {
            scrollLeft();
            setAutoSlide(false); // 수동 조작 시 자동 슬라이드 비활성화
          }}
        >
          &lt;
        </button>

        {/* 슬라이더 */}
        <div
          ref={sliderRef}
          className="overflow-x-auto flex gap-6 custom-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] cursor-pointer"
              style={{ scrollSnapAlign: 'start' }}
              onClick={() => openModal(post.img)}
            >
              <CardDefault
                title={post.title}
                desc={post.desc}
                img={post.img}
                date={post.date}
              />
            </div>
          ))}
        </div>

        {/* 오른쪽 화살표 */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full p-4 shadow-lg hover:bg-gray-300 focus:outline-none text-2xl"
          onClick={() => {
            scrollRight();
            setAutoSlide(false); // 수동 조작 시 자동 슬라이드 비활성화
          }}
        >
          &gt;
        </button>
      </div>

      {/* 모달 */}
      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModal} selectedImage={selectedImage} />
      )}
    </div>
  );
};

export default ActivityHighlights;
