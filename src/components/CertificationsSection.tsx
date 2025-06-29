
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Introduction to Python",
      provider: "YouTube",
      category: "Programming",
      color: "bg-blue-500"
    },
    {
      title: "Introduction to LLMs",
      provider: "Coursera",
      category: "AI/ML",
      color: "bg-green-500"
    },
    {
      title: "SQL & Relational Databases",
      provider: "IBM",
      category: "Database",
      color: "bg-purple-500"
    },
    {
      title: "Git & GitHub",
      provider: "Udemy",
      category: "Version Control",
      color: "bg-orange-500"
    },
    {
      title: "API Development",
      provider: "YouTube",
      category: "Backend",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
            >
              <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                <div className={`w-10 h-10 ${cert.color} rounded-full flex items-center justify-center`}>
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg text-gray-800 dark:text-white">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {cert.provider}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Badge variant="outline" className="border-blue-200 text-blue-700 dark:border-blue-700 dark:text-blue-400">
                  {cert.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
