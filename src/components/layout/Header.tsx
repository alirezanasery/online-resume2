'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { personalData } from '@/data/personalData';
import { useState, useEffect, useMemo } from 'react';

type Theme = 'dark' | 'light' | 'blue' | 'green';

export function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>('dark');
  const [showPicker, setShowPicker] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  // تابع بهبود یافته برای دانلود در موبایل
  const handleDownloadCV = () => {
    // روش ۱: استفاده از window.open برای موبایل
    if (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)) {
      window.open('/naseri.pdf', '_blank');
      return;
    }

    // روش ۲: برای دسکتاپ
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

  // تابع جایگزین برای تست
  const handleDownloadMobile = () => {
    // بهترین روش برای موبایل - باز کردن در تب جدید
    const pdfUrl = '/naseri.pdf';
    
    // ایجاد لینک موقت
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank'; // مهم برای موبایل
    link.rel = 'noopener noreferrer';
    
    // برای iOS بهتر عمل میکنه
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      window.open(pdfUrl, '_blank');
    } else {
      link.click();
    }
  };

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && themes.some(t => t.id === savedTheme)) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, [themes]);

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About', icon: '👤' },
    { href: '/experience', label: 'Experience', icon: '💼' },
    { href: '/skills', label: 'Skills', icon: '🛠️' },
    { href: '/projects', label: 'Projects', icon: '🚀' },
    { href: '/contact', label: 'Contact', icon: '📞' },
  ];

  if (!mounted) {
    return (
      <header className="theme-card/90 backdrop-blur-lg border-b border-theme sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 flex-shrink-0 mr-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="hidden sm:block">
                <div className="h-6 w-32 bg-gray-300 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="theme-card/90 backdrop-blur-lg border-b border-theme sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center space-x-3 flex-shrink-0 mr-4 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-gray-300 dark:border-gray-600 group-hover:border-blue-500 transition-colors">
              <Image 
                src="/profile.jpg" 
                alt={`${personalData.name} Profile`}
                width={40}
                height={40}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold theme-text group-hover:text-blue-500 transition-colors">
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
                className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg transition-all duration-200 text-sm lg:text-base whitespace-nowrap min-w-fit cursor-pointer ${
                  pathname === item.href
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'theme-text-muted hover:bg-gray-500 hover:bg-opacity-20 hover:text-blue-500'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="relative">
              <button
                onClick={() => setShowPicker(!showPicker)}
                className="p-2 rounded-lg bg-gray-500 bg-opacity-20 hover:bg-opacity-30 transition-colors theme-text cursor-pointer hover:text-blue-500"
                aria-label="Select theme"
              >
                🎨
              </button>

              {showPicker && (
                <div className="absolute right-0 top-12 theme-card border border-theme rounded-lg shadow-lg p-2 min-w-32 z-50 backdrop-blur-lg">
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

            {/* دکمه دانلود با تابع بهبود یافته */}
            <button 
              onClick={handleDownloadMobile} // استفاده از تابع بهبود یافته
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all whitespace-nowrap font-medium cursor-pointer hover:shadow-lg transform hover:scale-105 text-sm md:text-base"
            >
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
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                  pathname === item.href
                    ? 'bg-blue-600 text-white'
                    : 'theme-card theme-text-muted hover:bg-gray-500 hover:bg-opacity-20'
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