import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "QuickCart",
      description: "Modern e-commerce application built with Next.js featuring user authentication, cart functionality, and event handling.",
      technologies: ["Next.js", "Clerk", "Inngest", "TypeScript"],
      category: "Mern Stack",
      github: "https://github.com/228w1a1278/E-COMM",
      external: "https://e-comm-13nn.vercel.app/"
    },
    {
      title: "Password Manager",
      description: "Secure password storage application with encrypted backend, intuitive UI, and real-time notifications.",
      technologies: ["React", "MongoDB", "Node.js", "Encryption"],
      category: "Security",
      github: "https://github.com/228w1a1278/Password-Manager"
    },
    {
      title: "Voting Application",
      description: "Decentralized voting app built with blockchain technology for secure and transparent elections.",
      technologies: ["Solidity", "React", "Ethereum", "Smart Contracts"],
      category: "Blockchain",
      github: "https://github.com/228w1a1278/Blockchain_Voting_Web"
    },
    {
      title: "Weather App",
      description: "Real-time weather app fetching data from external APIs with clean, intuitive interface.",
      technologies: ["React-Native", "Weather API", "CSS"],
      category: "React-Native app",
      github: "https://github.com/228w1a1278/WeatherApp"
    },
    {
      title: "Remote Sensing ML Project",
      description: "Machine learning solution for classifying satellite imagery using NDVI and deep learning models.",
      technologies: ["Python", "TensorFlow", "NDVI", "Landsat-8"],
      category: "Machine Learning",
      github: "https://github.com/228w1a1278/LandCover-Classification"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="bg-card/50 backdrop-blur-sm border-border hover-lift hover:border-primary/50 transition-all duration-300 card-glow opacity-0 transform translate-y-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                 <div className="flex space-x-2">
  {project.github && (
    <div className="relative group">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-8 w-8 items-center justify-center rounded hover:text-primary transition-colors"
      >
        <Github className="h-4 w-4" />
      </a>
      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-background text-primary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
        Open GitHub
      </span>
    </div>
  )}
  {project.external && (
    <div className="relative group">
      <a
        href={project.external}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-8 w-8 items-center justify-center rounded hover:text-primary transition-colors"
      >
        <ExternalLink className="h-4 w-4" />
      </a>
      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-background text-primary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
        Open Live Demo
      </span>
    </div>
  )}
</div>

                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary/80"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/228w1a1278"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-background transition-all duration-300"
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </a>
        </div>
      </div>

      <style>
{`
  @keyframes fade-in {
    0% { opacity: 0; transform: translateY(24px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.6s ease-out;
  }
`}
</style>

    </section>
  );
};

export default ProjectsSection;
