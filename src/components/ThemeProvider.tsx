'use client';
import { useEffect } from 'react';
import { useResumeStore } from '@/stores/useResumeStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useResumeStore();

  useEffect(() => {
    // اعمال theme به HTML element هنگام لود صفحه
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return <>{children}</>;
}