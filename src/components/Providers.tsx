'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// تعریف نوع Theme
const themesList = ['dark', 'light', 'blue', 'green'] as const;
type Theme = typeof themesList[number];

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: { id: Theme; name: string; icon: string }[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // تعریف themes با نوع درست
  const themes: { id: Theme; name: string; icon: string }[] = [
    { id: 'dark', name: 'Dark', icon: '🌙' },
    { id: 'light', name: 'Light', icon: '☀️' },
    { id: 'blue', name: 'Blue', icon: '🔵' },
    { id: 'green', name: 'Green', icon: '🟢' },
  ];

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    
    // بررسی اینکه savedTheme یک Theme معتبر هست
    if (savedTheme && themesList.includes(savedTheme as Theme)) {
      setTheme(savedTheme as Theme);
    } else {
      setTheme('dark');
    }
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-gray-900 text-white">{children}</div>;
  }

  const value: ThemeContextType = {
    theme,
    setTheme,
    themes
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}