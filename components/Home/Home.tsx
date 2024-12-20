'use client';
import React, { useEffect } from 'react';
import Headline from './Headline/Headline';
import NewsHighlights from './NewsHighlights/NewsHighlights'; 
import ActivityHighlights from './ActivityHighlights/ActivityHighlights'; 
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import('aos');
      Aos.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };
    initAos();
  }, []);

  return (
    <div className="bg-[#f7f6fb] overflow-hidden">
      <Headline />
      <NewsHighlights />
      <ActivityHighlights />
      
    </div>
  );
};

export default Home;
