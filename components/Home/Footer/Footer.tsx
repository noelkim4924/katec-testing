'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-[#edecf1] text-gray-400 py-1">
      <div className="max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%] mx-auto pt-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-start items-center lg:gap-16 border-gray-500 pb-8">
          {/* Left - Logo and Description */}
          <div className="flex flex-col items-center lg:items-start gap-2 lg:mr-4">
            <Link href="/">
              <Image
                src="/images/logo/nonBg-logo.png"
                alt="Logo"
                width={120}
                height={50}
                className="object-cover"
                style={{ width: 'auto', height: '100%' }}
            />
            </Link>
            <p className="text-sm text-gray-400 text-center lg:text-left">
              Empowering Vancouver&apos;s Tech Community
            </p>
          </div>

          {/* Center - Social Media Icons */}
          <div className="flex items-center gap-3 lg:gap-5 lg:mr-6">
            <Link
              href="https://www.linkedin.com/company/katec2024/posts/?feedView=all/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logo/lnkdlogo.png"
                alt="Linkedin"
                width={32}
                height={32}
                className="filter grayscale hover:grayscale-0 transition-all"
              />
            </Link>
            <Link
              href="https://cafe.naver.com/katec2024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logo/naverlogo.png"
                alt="Naver"
                width={32}
                height={32}
                className="filter grayscale hover:grayscale-0 transition-all"
              />
            </Link>
            <Link
              href="https://open.kakao.com/o/gIHahNde"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logo/kakaoTlogo.png"
                alt="Kakao"
                width={32}
                height={32}
                className="filter grayscale hover:grayscale-0 transition-all"
              />
            </Link>
          </div>

          {/* Center - Links */}
          <div className="text-center lg:text-left mt-4">
            <ul className="flex flex-wrap gap-2 lg:gap-8 text-sm md:text-base text-gray-400">
              <li className="flex items-center">
                <Link href="/about">ABOUT</Link>
                <span className="mx-4">|</span>
              </li>
              <li className="flex items-center">
                <Link href="/news">NEWS</Link>
                <span className="mx-4">|</span>
              </li>
              <li className="flex items-center">
                <Link href="/activity">ACTIVITY</Link>
                <span className="mx-4">|</span>
              </li>
              <li className="flex items-center">
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
            {/* 추가 텍스트 */}
            <p className="text-xs text-gray-400 mt-4 text-right">Developed by Noel.Kim Seung-yeop.Hyun </p>
          </div>

          {/* Right - Sponsor Section */}
          <div className="text-right lg:ml-auto">
            <p className="text-sm font-semibold text-gray-500 mb-2">SPONSORED BY</p>
            <div className="flex items-center justify-end gap-2">
              <Link href="https://www.drawdream.ca/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/logo/logo2.png"
                  alt="Sponsor 1"
                  width={110}
                  height={20}
                  className="rounded-full cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
