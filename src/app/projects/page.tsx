import { projects } from '@/data/personalData';

export default function Projects() {
  return (
    <div className="min-h-screen theme-bg py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold theme-text mb-4">
            My Projects
          </h1>
          <p className="text-xl theme-text-muted">
            A collection of projects I{"'"}ve worked on
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="theme-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-theme">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <span className="text-6xl text-white">💻</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold theme-text mb-2">
                  {project.title}
                </h3>
                <p className="theme-text-muted mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      className="flex-1 bg-gray-800 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}