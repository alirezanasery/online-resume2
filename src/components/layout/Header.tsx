'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalData } from '@/data/personalData';
import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light' | 'blue' | 'green';

export function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>('dark');
  const [showPicker, setShowPicker] = useState(false);

  const themes: { id: Theme; name: string; icon: string }[] = [
    { id: 'dark', name: 'Dark', icon: '🌙' },
    { id: 'light', name: 'Light', icon: '☀️' },
    { id: 'blue', name: 'Blue', icon: '🔵' },
    { id: 'green', name: 'Green', icon: '🟢' },
  ];

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
    }
  }, []);

  const handleDownloadCV = () => {
    window.open('/naseri.pdf', '_blank');
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
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setShowPicker(!showPicker)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              >
                🎨
              </button>

              {showPicker && (
                <div className="absolute right-0 top-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 min-w-32 z-50">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => changeTheme(t.id)}
                      className={`flex items-center gap-2 w-full px-3 py-2 rounded text-sm ${
                        theme === t.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span>{t.icon}</span>
                      <span>{t.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

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