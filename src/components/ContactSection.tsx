
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Github, Linkedin, MessageCircle, Calendar, Phone, ExternalLink } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_9llwphj';
      const templateId = 'template_j7s3zle';
      const publicKey = 'y-Jg7asEtsD8d6fNm';

      // Send email using EmailJS with form reference
      const form = e.target as HTMLFormElement;
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form,
        publicKey
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      title: "WhatsApp",
      description: "Quick chat for immediate queries",
      icon: MessageCircle,
      action: () => window.open("https://wa.me/923135551742?text=Hi%20Ansar,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project", "_blank"),
      color: "from-green-500 to-green-600",
      buttonText: "Chat on WhatsApp"
    },
    {
      title: "Email",
      description: "For detailed project discussions",
      icon: Mail,
      action: () => window.open("mailto:ansarulhaq.dev@gmail.com", "_blank"),
      color: "from-blue-500 to-blue-600",
      buttonText: "Send Email"
    },
    {
      title: "Schedule Call",
      description: "Book a meeting to discuss your project",
      icon: Calendar,
      action: () => window.open("https://calendly.com/ansarulhaq-dev", "_blank"),
      color: "from-purple-500 to-purple-600",
      buttonText: "Schedule Meeting"
    },
    {
      title: "LinkedIn",
      description: "Professional networking & opportunities",
      icon: Linkedin,
      action: () => window.open("https://linkedin.com/in/ansar-ul-haq-a455b0241", "_blank"),
      color: "from-blue-600 to-blue-700",
      buttonText: "Connect on LinkedIn"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in-up">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-fade-in-up animate-stagger-1"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up animate-stagger-2">
            I'm always interested in new opportunities and collaborations. Choose your preferred way to reach out!
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.title}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg hover-lift transition-all duration-300 hover:shadow-xl animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {method.description}
                </p>
                <Button
                  onClick={method.action}
                  className={`w-full bg-gradient-to-r ${method.color} hover:scale-105 transition-all duration-300 text-white border-0`}
                >
                  {method.buttonText}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 hover-lift transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white font-medium">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">Islamabad, Pakistan</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 hover-lift transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white font-medium">Phone</p>
                    <a 
                      href="tel:+923135551742"
                      className="text-blue-600 dark:text-blue-400 hover:underline transition-all duration-300"
                    >
                      +92 313 5551742
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 hover-lift transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white font-medium">Email</p>
                    <a 
                      href="mailto:ansarulhaq.dev@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline transition-all duration-300"
                    >
                      ansarulhaq.dev@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 hover-lift transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white font-medium">GitHub</p>
                    <a 
                      href="https://github.com/Ansar54"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline transition-all duration-300"
                    >
                      github.com/Ansar54
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-0 shadow-2xl hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white">
                  Send me a message
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
