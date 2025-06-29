
import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // This will be connected to your Firebase Storage file
    // For now, it shows an alert - you can replace this with your actual resume URL
    alert("Resume download will be available once you upload your PDF to Firebase Storage");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Profile Picture Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            AH
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
            Ansar Ul Haq
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
            Python Backend Developer | FastAPI & Django Enthusiast
          </p>
          
          <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-10">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="text-lg">Islamabad, Pakistan</span>
          </div>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button 
              onClick={handleDownloadResume}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-blue-600"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
