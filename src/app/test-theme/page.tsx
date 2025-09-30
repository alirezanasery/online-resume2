'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function TestTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Theme Test Page - Current: {theme}
      </h1>
      
      <div className="space-y-6 max-w-2xl">
        {/* تست متن‌های مختلف */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow border">
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Text Colors Test</h2>
          <p className="text-gray-900 dark:text-white mb-2">• text-gray-900 / dark:text-white</p>
          <p className="text-gray-800 dark:text-gray-100 mb-2">• text-gray-800 / dark:text-gray-100</p>
          <p className="text-gray-700 dark:text-gray-200 mb-2">• text-gray-700 / dark:text-gray-200</p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">• text-gray-600 / dark:text-gray-300</p>
          <p className="text-gray-500 dark:text-gray-400">• text-gray-500 / dark:text-gray-400</p>
        </div>

        {/* تست background ها */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-800 rounded border">
            <p className="text-gray-900 dark:text-white">bg-white / dark:bg-gray-800</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded border">
            <p className="text-gray-900 dark:text-white">bg-gray-50 / dark:bg-gray-700</p>
          </div>
          <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded border">
            <p className="text-blue-900 dark:text-blue-100">bg-blue-100 / dark:bg-blue-900</p>
          </div>
          <div className="p-4 bg-green-100 dark:bg-green-900 rounded border">
            <p className="text-green-900 dark:text-green-100">bg-green-100 / dark:bg-green-900</p>
          </div>
        </div>

        {/* دکمه تغییر تم */}
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
        >
          Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>

        {/* وضعیت فعلی */}
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-yellow-100 text-yellow-900' : 'bg-purple-100 text-purple-900'}`}>
          <p className="font-semibold">
            Current mode: <span className="uppercase">{theme}</span>
          </p>
          <p>If text colors change correctly, theme is working!</p>
        </div>
      </div>
    </div>
  );
}