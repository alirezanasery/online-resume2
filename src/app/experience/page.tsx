import { experiences } from '@/data/personalData';

export default function Experience() {
  return (
    <div className="min-h-screen theme-bg py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold theme-text mb-4">
            Work Experience
          </h1>
          <p className="text-xl theme-text-muted">
            My professional journey and career path
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="theme-card rounded-2xl p-8 shadow-lg border border-theme">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold theme-text">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-blue-400">{exp.company}</p>
                </div>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span className="theme-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}