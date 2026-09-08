'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  playfair: { className: string };
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ playfair }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-purple-500/20 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Rakesh Sankhala Art home"
          className={`${playfair.className} text-xl font-extrabold tracking-wide sm:text-2xl md:text-3xl`}
        >
          <span className="mr-2">🎨</span>
          <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Rakesh Sankhala Art
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-gray-700 transition hover:text-purple-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-gray-800 transition hover:bg-purple-100 md:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-purple-100 bg-white px-6 py-5 shadow-lg md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2 font-semibold text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
