import { skills } from '@/data/personalData';

export default function Skills() {
  return (
    <div className="min-h-screen theme-bg py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold theme-text mb-4">
            Skills & Technologies
          </h1>
          <p className="text-xl theme-text-muted">
            Technologies I work with and my proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skillCategory, index) => (
            <div key={index} className="theme-card rounded-2xl p-6 shadow-lg border border-theme">
              <h3 className="text-xl font-bold theme-text mb-4">
                {skillCategory.category}
              </h3>
              <div className="space-y-3">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="theme-text-muted">{skill}</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div 
                          key={star}
                          className={`w-3 h-3 rounded-full ${
                            star <= 4 ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 theme-card rounded-2xl p-8 shadow-lg border border-theme max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold theme-text mb-6">Technical Proficiencies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 theme-text">Frontend Technologies</h4>
              <div className="space-y-2">
                <div className="flex justify-between theme-text-muted">
                  <span>React & Next.js</span>
                  <span className="text-blue-600 dark:text-blue-400">Advanced</span>
                </div>
                <div className="flex justify-between theme-text-muted">
                  <span>TypeScript</span>
                  <span className="text-blue-600 dark:text-blue-400">Advanced</span>
                </div>
                <div className="flex justify-between theme-text-muted">
                  <span>Tailwind CSS</span>
                  <span className="text-green-600 dark:text-green-400">Advanced</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 theme-text">Tools & Others</h4>
              <div className="space-y-2">
                <div className="flex justify-between theme-text-muted">
                  <span>Git & GitHub</span>
                  <span className="text-blue-600 dark:text-blue-400">Intermediate</span>
                </div>
                <div className="flex justify-between theme-text-muted">
                  <span>Photoshop</span>
                  <span className="text-green-600 dark:text-green-400">Advanced</span>
                </div>
                <div className="flex justify-between theme-text-muted">
                  <span>Cursur/Vscode</span>
                  <span className="text-green-600 dark:text-green-400">Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}