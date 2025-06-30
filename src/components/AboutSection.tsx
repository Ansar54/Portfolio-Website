import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const technologies = [
    { name: "Python", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
    { name: "FastAPI", color: "bg-gradient-to-r from-green-500 to-green-600" },
    { name: "Django", color: "bg-gradient-to-r from-green-600 to-green-700" },
    { name: "SQLAlchemy", color: "bg-gradient-to-r from-red-500 to-red-600" },
    { name: "Pydantic", color: "bg-gradient-to-r from-teal-500 to-teal-600" },
    { name: "PostgreSQL", color: "bg-gradient-to-r from-blue-600 to-blue-700" },
    { name: "MySQL", color: "bg-gradient-to-r from-orange-500 to-orange-600" },
    { name: "API Testing", color: "bg-gradient-to-r from-purple-500 to-purple-600" },
    { name: "API Integration", color: "bg-gradient-to-r from-cyan-500 to-cyan-600" },
    { name: "OOP", color: "bg-gradient-to-r from-indigo-500 to-indigo-600" },
    { name: "Data Structures & Algo", color: "bg-gradient-to-r from-violet-500 to-violet-600" },
    { name: "Linux", color: "bg-gradient-to-r from-gray-600 to-gray-700" },
    { name: "Git", color: "bg-gradient-to-r from-red-500 to-red-600" },
    { name: "GitHub", color: "bg-gradient-to-r from-gray-700 to-gray-800" },
    { name: "n8n", color: "bg-gradient-to-r from-pink-500 to-pink-600" },
    { name: "Prompt Engineering", color: "bg-gradient-to-r from-yellow-500 to-yellow-600" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in-up">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-fade-in-up animate-stagger-1"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-0 shadow-2xl hover-lift animate-fade-in-up animate-stagger-2">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 mb-10">
                <div className="lg:w-2/3">
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-slide-in-left">
                    I'm an innovative backend developer with expertise in Python, Django, and FastAPI. 
                    I'm passionate about building scalable and high-performance backend systems and 
                    collaborating with cross-functional teams to create cutting-edge products.
                  </p>
                </div>
                <div className="lg:w-1/3 animate-slide-in-right">
                  <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-xl hover-lift">
                    <img 
                      src="https://i.postimg.cc/jqz6X1DV/Ansar.png" 
                      alt="Ansar Ul Haq working on backend development"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in-up animate-stagger-3">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
                  Technologies & Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {technologies.map((tech, index) => (
                    <span
                      key={tech.name}
                      className={`${tech.color} text-white px-4 py-3 rounded-xl text-sm md:text-base font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center animate-scale-in`}
                      style={{ animationDelay: `${index * 0.1}s` }}
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
