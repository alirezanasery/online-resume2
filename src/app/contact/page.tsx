import { personalData } from '@/data/personalData';

export default function Contact() {
  return (
    <div className="min-h-screen theme-bg py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold theme-text mb-4">
            Get In Touch
          </h1>
          <p className="text-xl theme-text-muted">
            Let's work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="theme-card rounded-2xl p-6 shadow-lg border border-theme">
              <h3 className="text-2xl font-bold theme-text mb-4">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg theme-card border border-theme">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm theme-text-muted">Email</p>
                    <p className="font-medium theme-text">{personalData.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg theme-card border border-theme">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-sm theme-text-muted">Phone</p>
                    <p className="font-medium theme-text">{personalData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg theme-card border border-theme">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-sm theme-text-muted">Location</p>
                    <p className="font-medium theme-text">{personalData.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="theme-card rounded-2xl p-6 shadow-lg border border-theme">
              <h3 className="text-2xl font-bold theme-text mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-3">
                <a href={personalData.linkedin} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg transition-colors font-medium">
                  LinkedIn
                </a>
                <a href={personalData.github} className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-center py-3 rounded-lg transition-colors font-medium">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="theme-card rounded-2xl p-6 shadow-lg border border-theme">
            <h3 className="text-2xl font-bold theme-text mb-4">
              Send Message
            </h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium theme-text-muted mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 theme-text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium theme-text-muted mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 theme-text"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium theme-text-muted mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 theme-text"
                  placeholder="Enter your message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}