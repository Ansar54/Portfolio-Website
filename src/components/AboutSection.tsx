
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const technologies = [
    { name: "Python", color: "bg-blue-500" },
    { name: "FastAPI", color: "bg-green-500" },
    { name: "Django", color: "bg-green-600" },
    { name: "PostgreSQL", color: "bg-blue-600" },
    { name: "MySQL", color: "bg-orange-500" },
    { name: "Git", color: "bg-red-500" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-50 dark:bg-gray-800 border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I'm a passionate backend developer with expertise in Python and modern web frameworks. 
                My journey in software development has been driven by a love for creating efficient, 
                scalable solutions that power modern applications. I specialize in building robust APIs, 
                designing database architectures, and implementing clean, maintainable code.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
                With experience in FastAPI and Django, I enjoy working on challenging problems that 
                require innovative solutions. I'm always eager to learn new technologies and contribute 
                to projects that make a meaningful impact.
              </p>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                  Technologies & Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className={`${tech.color} text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
