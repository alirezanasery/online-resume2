import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata = {
  title: 'Online Resume - Your Name',
  description: 'Professional Online Resume',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body className={`${inter.variable} font-sans antialiased theme-bg theme-text min-h-screen`}>
        <Header />
        <main className="theme-bg">
          {children}
        </main>
      </body>
    </html>
  );
}