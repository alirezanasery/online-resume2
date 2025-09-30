import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ResumeStore {
  theme: 'light' | 'dark';
  currentSection: string;
  setTheme: (theme: 'light' | 'dark') => void;
  setCurrentSection: (section: string) => void;
  toggleTheme: () => void;
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set, get) => ({
      theme: 'light',
      currentSection: 'home',
      setTheme: (theme) => {
        set({ theme });
        // اعمال theme به HTML element
        if (typeof window !== 'undefined') {
          document.documentElement.classList.toggle('dark', theme === 'dark');
        }
      },
      setCurrentSection: (section) => set({ currentSection: section }),
      toggleTheme: () => {
        const newTheme = get().theme === 'light' ? 'dark' : 'light';
        set({ theme: newTheme });
        // اعمال theme به HTML element
        if (typeof window !== 'undefined') {
          document.documentElement.classList.toggle('dark', newTheme === 'dark');
        }
      },
    }),
    {
      name: 'resume-storage', // اسم برای localStorage
    }
  )
);