
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
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1vUvykPx4YI7V3n4-F9JxyHzwfHS_E9cp';
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ansar_Ul_Haq_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-600/30 hover-lift animate-scale-in">
            <img 
              src="https://i.postimg.cc/jqz6X1DV/Ansar.png" 
              alt="Ansar Ul Haq - Python Backend Developer"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in-up leading-tight">
            Ansar Ul Haq
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto animate-fade-in-up animate-stagger-1 leading-relaxed">
            Python Backend Developer | FastAPI & Django Enthusiast
          </p>
          
          <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-10 animate-fade-in-up animate-stagger-2">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="text-base md:text-lg">Islamabad, Pakistan</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animate-stagger-3">
            <Button 
              onClick={handleDownloadResume}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover-glow transition-all duration-300 w-full sm:w-auto"
            >
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
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
            className="text-gray-400 hover:text-blue-600 transition-colors duration-300 rounded-full"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
