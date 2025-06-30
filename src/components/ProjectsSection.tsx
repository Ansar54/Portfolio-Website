
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SocialNest",
      description: "A comprehensive social media application built with Django and PostgreSQL, featuring user authentication, post management, and social interactions.",
      technologies: ["Django", "PostgreSQL", "Python", "HTML/CSS"],
      github: "https://github.com/Ansar54/SocialNest",
      demo: "#",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Open Vetting",
      description: "An AI-powered tool for job candidate evaluation and recruitment processes, streamlining hiring decisions with intelligent assessment capabilities.",
      technologies: ["Python", "AI/ML", "FastAPI", "PostgreSQL"],
      github: "https://github.com/Ansar54/open_vetting",
      demo: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Health Vault",
      description: "FastAPI-based health data management system with real-time access, secure data storage, and comprehensive health monitoring APIs.",
      technologies: ["FastAPI", "Python", "PostgreSQL", "REST APIs"],
      github: "https://github.com/Ansar54/Health_vault",
      demo: "#",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-fade-in-up animate-stagger-1"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up animate-stagger-2">
            Here are some of my recent projects that showcase my backend development skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover-lift bg-white dark:bg-gray-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex-1"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
