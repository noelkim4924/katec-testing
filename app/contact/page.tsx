'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/FAQ/Layout';
import data from '@/public/data/faq.json';


const ContactPage: React.FC = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState<null | boolean>(null);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setIsSuccess(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      console.log('Email sent:', result);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
    } finally {
      setIsSending(false);
    }
  };

  // QnA 상태 및 핸들러
  const [active, setActive] = useState<boolean[]>(data.map(() => false));
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    if (isSomeActive) {
      setActive(data.map(() => false)); // 전부 false로 (닫기)
    } else {
      setActive(data.map(() => true)); // 전부 true로 (열기)
    }
  };

  return (
    <>
      <Head>
        <title>Contact & FAQ</title>
        <meta name="description" content="Contact and FAQ page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col items-center justify-between min-h-screen bg-[#f7f6fb] px-4 py-10 md:px-10 pt-[100px]">
        {/* Contact Title */}
        <div className="w-full max-w-7xl text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">CONTACT</h2>
        </div>

        {/* FAQ & Contact Form Section */}
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 items-start">
          {/* FAQ Section */}
          <div className="flex-[1.6] bg-white p-6 rounded shadow-md w-full">
            <Layout
              handleClick={handleClick}
              isSomeActive={isSomeActive}
              data={data}
              turn={active}
              setTurn={setActive}
            />
          </div>

          {/* Contact Form */}
          <div className="flex-[1] bg-white p-8 rounded shadow-md h-[707px]">
            {/* Address, Email */}
<div className="grid grid-cols-2 gap-6 mb-6 mt-11 text-center">
  <div className="flex flex-col items-center">
    <div className="text-gray-500 text-2xl mb-2">📍</div>
    <h3 className="text-lg font-semibold text-gray-800">ADDRESS</h3>
    <p className="text-gray-600">Vancouver CA & Seoul KR</p>
  </div>
  
  <div className="flex flex-col items-center">
    <div className="text-gray-500 text-2xl mb-2">✉️</div>
    <h3 className="text-lg font-semibold text-gray-800">EMAIL</h3>
    <p className="text-gray-600">info@katec.ca</p>
  </div>
</div>

            {/* Middle text */}
            <div className="mb-6 text-center">
              <p className="text-gray-700">
                이곳은 협찬 또는 KATEC에 대한 어떠한것에 의문이 생기면 물어볼 수 있는 메일을 보낼 수 있는 공간입니다.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-4 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-gray-200"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-4 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-gray-200"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="p-4 border border-gray-300 rounded w-full mb-4 focus:outline-none focus:ring focus:ring-gray-200"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="p-4 border border-gray-300 rounded w-full mb-6 focus:outline-none focus:ring focus:ring-gray-200"
                required
              ></textarea>
              <button
                type="submit"
                className={`w-full py-3 ${isSending ? 'bg-gray-400' : 'bg-black'} text-white font-semibold rounded mt-4 hover:bg-gray-800 transition`}
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {isSuccess === true && (
              <p className="text-green-500 mt-4">Email sent successfully!</p>
            )}
            {isSuccess === false && (
              <p className="text-red-500 mt-4">Failed to send email. Please try again later.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
