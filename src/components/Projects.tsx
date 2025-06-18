
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Health Risk Evaluation App",
      description: "A full-stack application for predicting health risks using machine learning, with a secure, user-friendly interface.",
      tech: ["Django", "Machine Learning", "Python", "SQL"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
      gradient: "from-electric to-blue-500"
    },
    {
      title: "Speech Emotion Recognition",
      description: "An AI model trained to detect emotions from speech using CNNs, with pre-processing and performance analysis.",
      tech: ["CNN", "Python", "TensorFlow", "Audio Processing"],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008",
      gradient: "from-neon to-green-500"
    },
    {
      title: "Online Food Ordering System",
      description: "A web-based application enabling food ordering, customer management, and payment processing via a smooth UI.",
      tech: ["HTML/CSS", "JavaScript", "SQL", "PHP"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
      gradient: "from-orange to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-gray-700 hover:border-electric/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-electric/20"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white group-hover:text-electric transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-electric/20 text-electric rounded-full border border-electric/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="bg-electric hover:bg-electric/80 text-deep">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="border-electric text-electric hover:bg-electric hover:text-deep">
                    Live Demo
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

export default Projects;
