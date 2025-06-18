
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Custom Web Development",
      description: "Responsive, modern websites built with the latest technologies and best practices.",
      features: ["React & Next.js", "Responsive Design", "Performance Optimization", "SEO Friendly"],
      icon: "🌐"
    },
    {
      title: "Full-Stack Solutions",
      description: "Complete end-to-end web applications with robust backend and intuitive frontend.",
      features: ["Django & Node.js", "Database Design", "API Development", "Authentication"],
      icon: "⚡"
    },
    {
      title: "Database Integration",
      description: "Efficient database design and integration for scalable data management.",
      features: ["SQL Optimization", "Data Modeling", "Database Security", "Migration"],
      icon: "🗃️"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-gray-700 hover:border-electric/50 transition-all duration-300 transform hover:scale-105 glow-border"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-electric transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-center leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-electric rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
