'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  playfair: { className: string };
}

type Particle = { id: number; top: number; left: number; size: number; speed: number };
type Flame = { id: number; x: number; y: number; size: number; opacity: number; speedX: number; speedY: number; rotation: number; blur: number };

const Header: React.FC<HeaderProps> = ({ playfair }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [flames, setFlames] = useState<Flame[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoverLogo, setHoverLogo] = useState(false);

  // Floating background particles
  useEffect(() => {
    const temp: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      temp.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 2,
        speed: Math.random() * 0.5 + 0.3,
      });
    }
    setParticles(temp);
  }, []);

  // Magic flame particles on logo hover
  useEffect(() => {
    if (hoverLogo) {
      const temp: Flame[] = [];
      for (let i = 0; i < 25; i++) {
        temp.push({
          id: i,
          x: mousePos.x + (Math.random() - 0.5) * 80,
          y: mousePos.y + (Math.random() - 0.5) * 40,
          size: Math.random() * 14 + 6,
          opacity: Math.random() * 0.8 + 0.3,
          speedX: (Math.random() - 0.5) * 1.2,
          speedY: -Math.random() * 1.5 - 0.5,
          rotation: Math.random() * 360,
          blur: Math.random() * 4 + 2,
        });
      }
      setFlames(temp);
    } else {
      setFlames([]);
    }
  }, [hoverLogo, mousePos]);

  // Update flames
  useEffect(() => {
    const interval = setInterval(() => {
      setFlames(prev =>
        prev
          .map(f => ({
            ...f,
            x: f.x + f.speedX,
            y: f.y + f.speedY,
            rotation: f.rotation + (Math.random() - 0.5) * 5,
            opacity: Math.max(f.opacity - 0.015, 0),
          }))
          .filter(f => f.opacity > 0)
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed w-full top-0 left-0 z-50 overflow-hidden">
      {/* Cosmic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 via-purple-800 to-pink-900 animate-gradient-x blur-3xl opacity-95"></div>

      {/* Floating neon particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-purple-400/50 shadow-[0_0_10px_rgba(255,255,255,0.3)] animate-float"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDuration: `${6 / p.speed}s`,
          }}
        ></div>
      ))}

      {/* Neon flames on logo */}
      {flames.map(f => (
        <div
          key={f.id}
          className="absolute"
          style={{
            width: f.size,
            height: f.size * (Math.random() * 0.8 + 0.6),
            top: f.y,
            left: f.x,
            opacity: f.opacity,
            transform: `rotate(${f.rotation}deg) skew(${Math.random() * 20 - 10}deg, ${
              Math.random() * 20 - 10
            }deg)`,
            background:
              'radial-gradient(circle, rgba(255,255,180,1) 0%, rgba(255,150,0,0.7) 50%, rgba(255,60,0,0) 100%)',
            filter: `blur(${f.blur}px)`,
            pointerEvents: 'none',
          }}
        ></div>
      ))}

      {/* Header Container */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3 backdrop-blur-md bg-black/40 border border-purple-500/20 shadow-lg rounded-b-xl">
        {/* Logo */}
        <Link
          href="/"
          className={`${playfair.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide relative group text-white`}
          onMouseEnter={() => setHoverLogo(true)}
          onMouseLeave={() => setHoverLogo(false)}
          onMouseMove={e => setMousePos({ x: e.clientX, y: e.clientY })}
        >
          <span className="inline-block transform transition-transform duration-500 group-hover:rotate-12">🎨</span>
          <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-gradient-x">
            Rakesh Sankhala Art
          </span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 rounded-full group-hover:w-full transition-all duration-500"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          {['Home', 'Project', 'About', 'Contact'].map(item => (
            <Link
              key={item}
              href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
              className="relative px-2 py-1 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-[length:200%_auto] bg-left animate-gradient-x group-hover:w-full transition-all duration-500 rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-12 h-12 bg-black/50 rounded-full backdrop-blur-sm text-white hover:bg-purple-700/40 transition-all duration-300"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-md shadow-lg rounded-b-xl overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'
        }`}
      >
        <nav className="flex flex-col space-y-4 p-6 text-gray-200 font-medium">
          {['Home', 'Project', 'About', 'Contact'].map(item => (
            <Link
              key={item}
              href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 hover:scale-105 transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(-15px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.7; }
        }
        .animate-float { animation: float infinite ease-in-out; }
      `}</style>
    </header>
  );
};

export default Header;