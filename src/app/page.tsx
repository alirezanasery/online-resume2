import Link from 'next/link';
import Image from 'next/image';
import { personalData } from '@/data/personalData';

export default function Home() {
  return (
    <div className="min-h-screen theme-bg">
      <section className="theme-bg">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* استفاده از Image به جای img */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <Image 
                src="/profile.jpg" 
                alt="Profile" 
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority // برای LCP بهتر
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold theme-text mb-6">
              {personalData.name}
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-400 mb-8">
              {personalData.title}
            </p>
            
            <p className="text-lg theme-text-muted mb-12 leading-relaxed max-w-2xl mx-auto">
              {personalData.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/projects"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg cursor-pointer"
              >
                🚀 View Projects
              </Link>
              
              <Link 
                href="/contact"
                className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-900 transition-all cursor-pointer"
              >
                📞 Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="theme-bg py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 theme-card rounded-xl shadow-lg border border-theme cursor-pointer">
              <div className="text-3xl text-blue-400 mb-2">3+</div>
              <div className="theme-text-muted">Years Experience</div>
            </div>
            
            <div className="text-center p-6 theme-card rounded-xl shadow-lg border border-theme cursor-pointer">
              <div className="text-3xl text-green-400 mb-2">50+</div>
              <div className="theme-text-muted">Projects Completed</div>
            </div>
            
            <div className="text-center p-6 theme-card rounded-xl shadow-lg border border-theme cursor-pointer">
              <div className="text-3xl text-purple-400 mb-2">100%</div>
              <div className="theme-text-muted">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}