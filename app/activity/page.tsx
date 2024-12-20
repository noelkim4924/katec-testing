'use client';

import React, { useState, useEffect } from 'react';
import CardDefault from '@/components/Card/ActivityCardDefault';
import Modal from '@/components/Modal/Modal';
import { Post } from '@/types/post'; // Post 인터페이스 임포트

const ActivityPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const openModal = (img: string) => {
    setSelectedImage(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-10 md:px-20 bg-[#f7f6fb] pt-[100px] min-h-screen">
      {/* content & text */}
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-gray-800">ACTIVITY</h2>

        {/* card list */}
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={index}
              onClick={() => openModal(post.img)}
              className="cursor-pointer"
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
      </div>

      {/* modal */}
      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModal} selectedImage={selectedImage} />
      )}
    </div>
  );
};

export default ActivityPage;
