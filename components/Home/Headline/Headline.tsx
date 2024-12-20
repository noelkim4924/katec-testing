import React from 'react'
import Image from 'next/image'

const Headline = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]'>
      
      <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            {/* Social Links and Invitation */}
            <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-blue-200">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/katec2024/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image
                  src="/images/logo/lnkdlogo.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </a>
              {/* naver*/}
              <a
                href="https://cafe.naver.com/katec2024"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image
                  src="/images/logo/naverlogo.png"
                  alt="NAVER"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </a>
              {/* KaKao */}
              <a
                href="https://open.kakao.com/o/gIHahNde"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image
                  src="/images/logo/kakaoTlogo.png"
                  alt="KAkao"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </a>
              {/* Invitation Text */}
              <p className="text-xs sm:text-sm">KATEC에 오신 것을 환영합니다!</p>
            </div>
            {/* Title */}
            <h1
            data-aos="fade-up" 
            className="text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]">
              함께 성장하는 한국인 Tech 커뮤니티<br /><br />
            </h1>
            {/* Description */} 
            <p>
            KATEC(Korean Association of Tech Canada)는 캐나다 Tech 업계에서 성공을 꿈꾸는 한국인을 위해 만들어진 커뮤니티입니다.
            KATEC은 네트워킹, 취업 정보, 최신 기술 트렌드 공유, 그리고 협업 프로젝트를 통해 한국인 개발자와 기술 전문가들이 함께 성장할 수 있는 플랫폼을 제공합니다.<br /><br />
            취업 준비생부터 현업 전문가까지 누구나 환영합니다. 우리의 목표는 더 큰 꿈을 이루기 위한 연결과 지원입니다. 함께 성장하고 미래를 만들어가요!
            </p>
          </div>
          
          {/* Right */}
          <div data-aos="fade-up" data-aos-delay='200' className="hidden lg:block">
            <Image src="/images/main/image2.jpeg" width={800} height={700} alt="hero" />
          </div>
        </div>
      </div>
    </div>   
  )
}

export default Headline
