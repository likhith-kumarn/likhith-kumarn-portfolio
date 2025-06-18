
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am <span className="text-electric font-semibold">Likhith Kumar N</span>, a graduate in Information Science Engineering with a passion for software development, data science, and full stack development. I aim to build impactful digital solutions and grow in dynamic tech environments.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in modern web technologies and machine learning, I enjoy creating applications that solve real-world problems and enhance user experiences.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'Django', 'Java', 'Python', 'SQL', 'Machine Learning', 'Full Stack'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-electric/20 to-neon/20 border border-electric/30 rounded-full text-electric font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="glow-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-electric mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white">B.E. in Information Science Engineering</h4>
                    <p className="text-gray-400">Cambridge Institute of Technology, Bangalore</p>
                    <p className="text-gray-400">2021–2025 | CGPA: 8.0</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">PUC</h4>
                    <p className="text-gray-400">Morarji Desai Residential Science PU College, Bangalore</p>
                    <p className="text-gray-400">2019–2021 | 90%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
