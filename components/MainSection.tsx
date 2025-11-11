'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const MainSection: React.FC = () => {
  const artStyles = [
    { title: 'Doodle Art', desc: 'Playful, intricate, and fun designs' },
    { title: 'Canvas Painting', desc: 'Unique artwork for homes and galleries' },
    { title: 'Wall Painting', desc: 'Transform spaces with vibrant creativity' },
    { title: 'Portrait Painting', desc: 'Capturing emotions and expressions perfectly' },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 via-pink-50 to-white px-6 py-20 pt-24 text-center overflow-hidden">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 animate-gradient-x mb-6">
        Hi, I’m Rakesh Sankhala
      </h1>

      {/* Subheading */}
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl">
        I’m a graffiti art enthusiast from Jaipur, Rajasthan with{' '}
        <span className="font-semibold text-indigo-500">8 years of hands-on experience</span> in creating vibrant,
        captivating art that brings walls and canvases to life.
      </p>
      <p className="text-md sm:text-lg md:text-xl text-gray-600 max-w-4xl mb-12">
        Passionate about expressing creativity, I specialize in transforming ideas into visually stunning masterpieces.
        From intricate <span className="font-semibold">doodle art</span> to bold{' '}
        <span className="font-semibold">canvas paintings</span>, striking <span className="font-semibold">wall murals</span>, and lifelike{' '}
        <span className="font-semibold">portrait paintings</span>, I bring imagination to reality with every stroke.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 w-full max-w-6xl">
        {artStyles.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      <button className="px-8 py-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 mb-6">
        Let’s Collaborate
      </button>
      <div className="flex items-center gap-6 text-2xl text-gray-700">
        <a
          href="https://www.facebook.com/p/Rakesh-Sankhla-%C3%80rt-100063960668984/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-[#1877F2]"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/rakesh.sankhala_art/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-[#E4405F]"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/918239638262"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-[#25D366]"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};

export default MainSection;
