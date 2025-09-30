'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalData } from '@/data/personalData';
// حذف useEffect و useState چون استفاده نمیشن
// import { useState, useEffect } from 'react';

export function Header() {
  const pathname = usePathname();
  
  // حذف stateهای theme چون استفاده نمیشن
  // const [theme, setTheme] = useState('dark');
  // const [showPicker, setShowPicker] = useState(false);

  const handleDownloadCV = () => {
    window.open('/naseri.pdf', '_blank');
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">CV</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                {personalData.name}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {personalData.title}
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  pathname === item.href
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all cursor-pointer font-medium"
            >
              📄 Download CV
            </button>
          </div>
        </div>

        <div className="md:hidden mt-4">
          <div className="flex overflow-x-auto gap-2 pb-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap flex-shrink-0 ${
                  pathname === item.href
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}