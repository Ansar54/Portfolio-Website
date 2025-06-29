
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ArrowUp } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce API",
      description: "A comprehensive REST API built with FastAPI for an e-commerce platform, featuring user authentication, product management, and order processing.",
      technologies: ["FastAPI", "PostgreSQL", "JWT", "SQLAlchemy"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management System",
      description: "A Django-based web application for team task management with real-time updates, role-based permissions, and detailed analytics.",
      technologies: ["Django", "MySQL", "Redis", "Celery"],
      github: "#",
      demo: "#"
    },
    {
      title: "Data Analytics Dashboard",
      description: "A Python backend service that processes large datasets and provides APIs for a React dashboard, featuring data visualization and reporting.",
      technologies: ["Python", "FastAPI", "Pandas", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Authentication Microservice",
      description: "A scalable authentication service built with FastAPI, supporting OAuth2, JWT tokens, and integration with multiple databases.",
      technologies: ["FastAPI", "OAuth2", "Docker", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "API Gateway Service",
      description: "A high-performance API gateway built with Python that handles routing, rate limiting, and authentication for microservices architecture.",
      technologies: ["Python", "FastAPI", "Redis", "Docker"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my backend development skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
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
                    className="flex items-center space-x-2 border-gray-300 dark:border-gray-600"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ArrowUp className="h-4 w-4" />
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
