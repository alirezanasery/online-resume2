'use client';
import Link from 'next/link';
import { personalData } from '@/data/personalData';
import { useState, useEffect } from 'react';

export function Header() {
  const [theme, setTheme] = useState('dark');
  
  // تابع ساده‌تر برای دانلود
  const handleDownloadCV = () => {
    // روش کاملاً compatible
    const link = document.createElement('a');
    link.href = '/naseri.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header style={{ 
      backgroundColor: 'white', 
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <nav style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '1rem'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontWeight: 'bold' }}>CV</span>
            </div>
            <div style={{ display: window.innerWidth > 640 ? 'block' : 'none' }}>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                {personalData.name}
              </h1>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                {personalData.title}
              </p>
            </div>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button 
              onClick={handleDownloadCV}
              style={{
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Download CV
            </button>
          </div>
        </div>

        {/* منوی موبایل ساده */}
        <div style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          gap: '8px', 
          marginTop: '1rem',
          paddingBottom: '8px'
        }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                whiteSpace: 'nowrap',
                backgroundColor: '#f3f4f6',
                color: '#374151',
                textDecoration: 'none'
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}