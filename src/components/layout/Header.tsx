'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalData } from '@/data/personalData';
import { useState, useEffect, useMemo } from 'react';

// تعریف نوع Theme
type Theme = 'dark' | 'light' | 'blue' | 'green';

export function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>('dark');
  const [showPicker, setShowPicker] = useState(false);

const themes = useMemo(() => [
  { id: 'dark' as Theme, name: 'Dark', icon: '🌙' },
  { id: 'light' as Theme, name: 'Light', icon: '☀️' },
  { id: 'blue' as Theme, name: 'Blue', icon: '🔵' },
  { id: 'green' as Theme, name: 'Green', icon: '🟢' },
], []); // useMemo اضافه شد

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    setShowPicker(false);
  };

  // بارگذاری theme از localStorage هنگام لود
// خط ۳۹ هم درسته چون حالا themes با useMemo ثابت شده
useEffect(() => {
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme && themes.some(t => t.id === savedTheme)) {
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    setTheme('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}, [themes]); // اینجا درسته

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About', icon: '👤' },
    { href: '/experience', label: 'Experience', icon: '💼' },
    { href: '/skills', label: 'Skills', icon: '🛠️' },
    { href: '/projects', label: 'Projects', icon: '🚀' },
    { href: '/contact', label: 'Contact', icon: '📞' },
  ];

  return (
    <header className="theme-card/90 backdrop-blur-lg border-b border-theme sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0 mr-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">CV</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold theme-text">
                {personalData.name}
              </h1>
              <p className="text-sm theme-text-muted">
                {personalData.title}
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-1 justify-center mx-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg transition-all duration-200 text-sm lg:text-base whitespace-nowrap min-w-fit ${
                  pathname === item.href
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'theme-text-muted hover:bg-gray-500 hover:bg-opacity-20'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="relative">
              <button
                onClick={() => setShowPicker(!showPicker)}
                className="p-2 rounded-lg bg-gray-500 bg-opacity-20 hover:bg-opacity-30 transition-colors theme-text"
                aria-label="Select theme"
              >
                🎨
              </button>

              {showPicker && (
                <div className="absolute right-0 top-12 theme-card border border-theme rounded-lg shadow-lg p-2 min-w-32 z-50">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => changeTheme(t.id)}
                      className={`flex items-center gap-2 w-full px-3 py-2 rounded text-sm transition-colors ${
                        theme === t.id
                          ? 'bg-blue-600 text-white'
                          : 'theme-text hover:bg-gray-500 hover:bg-opacity-20'
                      }`}
                    >
                      <span>{t.icon}</span>
                      <span>{t.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all whitespace-nowrap font-medium">
              📄 Download CV
            </button>
          </div>
        </div>

        <div className="md:hidden mt-4">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all flex-shrink-0 ${
                  pathname === item.href
                    ? 'bg-blue-600 text-white'
                    : 'theme-card theme-text-muted'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}