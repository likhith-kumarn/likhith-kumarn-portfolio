
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,53,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-electric/30 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-neon/30 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 border border-orange/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Profile Image Placeholder */}
        <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-electric to-orange p-1 animate-glow">
          <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold text-white">
            LK
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="gradient-text">Likhith Kumar N</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Full Stack Developer | Data Science Enthusiast
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Passionate about building impactful digital solutions using modern technologies like React, Django, and Machine Learning
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-electric to-neon hover:from-electric/80 hover:to-neon/80 text-deep font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            className="border-electric text-electric hover:bg-electric hover:text-deep font-semibold px-8 py-3 text-lg transition-all duration-300"
          >
            Download Resume
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-electric" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
