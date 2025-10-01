'use client'; // این خط رو اضافه کن
import { personalData } from '@/data/personalData';

export default function About() {
  // تابع دانلود رو اضافه کن
  const handleDownloadCV = () => {
    window.open('/naseri.pdf', '_blank');
  };

  return (
    <div className="min-h-screen theme-bg py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* اضافه کردن عکس پروفایل */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold theme-text mb-4">
            About Me
          </h1>
          <p className="text-xl theme-text-muted">
            Passionate developer who loves creating amazing web experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="theme-card rounded-2xl p-8 shadow-lg border border-theme">
              <h2 className="text-2xl font-bold theme-text mb-6">
                Introduction
              </h2>
              <p className="theme-text-muted leading-relaxed text-lg mb-6">
                {personalData.summary}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 p-4 theme-card rounded-lg border border-theme cursor-pointer">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm theme-text-muted">Email</p>
                    <p className="font-medium theme-text">{personalData.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 theme-card rounded-lg border border-theme cursor-pointer">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <p className="text-sm theme-text-muted">Phone</p>
                    <p className="font-medium theme-text">{personalData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 theme-card rounded-lg border border-theme cursor-pointer">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="text-sm theme-text-muted">Location</p>
                    <p className="font-medium theme-text">{personalData.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 theme-card rounded-lg border border-theme cursor-pointer">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <p className="text-sm theme-text-muted">Position</p>
                    <p className="font-medium theme-text">{personalData.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="theme-card rounded-2xl p-6 shadow-lg border border-theme">
              <h3 className="font-bold text-lg mb-4 theme-text">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 theme-text-muted">
                    <span>Frontend Development</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 theme-text-muted">
                    <span>UI/UX Design</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 theme-text-muted">
                    <span>Responsive design</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 theme-text-muted">
                    <span>Problem Solving</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white text-center">
              <h3 className="font-bold text-lg mb-2">Download Resume</h3>
              <p className="text-blue-100 mb-4">Get my complete CV in PDF format</p>
              {/* دکمه درست شده */}
              <button 
                onClick={handleDownloadCV}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}