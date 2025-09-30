'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalData } from '@/data/personalData';
import { useState, useEffect, useMemo } from 'react';

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
  ], []);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    setShowPicker(false);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && themes.some(t => t.id === savedTheme)) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, [themes]);

  const handleDownloadCV = () => {
    // روش بهینه‌تر برای دانلود
    const link = document.createElement('a');
    link.href = '/naseri.pdf';
    link.download = 'naseri.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

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
          {/* لوگو با عکس پروفایل */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 flex-shrink-0 mr-4 cursor-pointer" // cursor-pointer اضافه شد
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-gray-300 dark:border-gray-600">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
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

          {/* منوی اصلی */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-1 justify-center mx-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg transition-all duration-200 text-sm lg:text-base whitespace-nowrap min-w-fit cursor-pointer ${
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

          {/* سمت چپ - تم و دانلود */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* انتخاب تم */}
            <div className="relative">
              <button
                onClick={() => setShowPicker(!showPicker)}
                className="p-2 rounded-lg bg-gray-500 bg-opacity-20 hover:bg-opacity-30 transition-colors theme-text cursor-pointer" // cursor-pointer اضافه شد
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
                      className={`flex items-center gap-2 w-full px-3 py-2 rounded text-sm transition-colors cursor-pointer ${
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

            {/* دکمه دانلود */}
            <button 
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all whitespace-nowrap font-medium cursor-pointer" // cursor-pointer اضافه شد
            >
              📄 Download CV
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        <div className="md:hidden mt-4">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
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