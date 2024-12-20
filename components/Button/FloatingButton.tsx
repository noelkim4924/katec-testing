'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const FloatingButton: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      
      <button
        onClick={toggleMenu}
        className="w-auto h-auto hover:scale-110 transition animate-bounce-slow"
        style={{ border: 'none', background: 'transparent', padding: 0 }}
        aria-label="메뉴 열기"
      >
        <Image
  src="/images/main/floatingcloud.png"
  alt="메인 버튼"
  width={84} 
  height={84} 
  className="object-contain"
/>
      </button>

      {/* Floating Menu */}
      {isMenuOpen && (
        <div className="absolute bottom-20 right-0 bg-[#f7f6fb] rounded-lg p-4 flex flex-col items-center space-y-4">
          <a
            href="https://www.linkedin.com/company/katec2024/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <Image
              src="/images/logo/lnkdlogo.png"
              alt="LinkedIn"
              width={32}
              height={32}
              className="rounded-full"
            />
          </a>
          <a
            href="https://cafe.naver.com/katec2024"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <Image
              src="/images/logo/naverlogo.png"
              alt="Naver"
              width={32}
              height={32}
              className="rounded-full"
            />
          </a>
          <a
            href="https://open.kakao.com/o/gIHahNde"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <Image
              src="/images/logo/kakaoTlogo.png"
              alt="Kakao"
              width={32}
              height={32}
              className="rounded-full"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
