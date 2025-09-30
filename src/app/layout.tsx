import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
//import './utils/polyfills';

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
      <head>
        {/* اضافه کردن meta tags برای compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.variable} font-sans antialiased theme-bg theme-text min-h-screen`}>
        <Header />
        <main className="theme-bg">
          {children}
        </main>
      </body>
    </html>
  );
}