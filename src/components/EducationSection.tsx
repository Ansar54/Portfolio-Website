
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-50 dark:bg-gray-800 border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl text-gray-800 dark:text-white">
                  Bachelor of Science in Software Engineering
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                  University of Engineering and Technology, Mardan
                </CardDescription>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>2020 - 2024</span>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Final Year Project
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Open Vetting</strong> - An AI-based recruitment tool designed to streamline 
                  the hiring process through intelligent candidate evaluation and assessment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
