import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "QuickCart",
      description: "Modern e-commerce application built with Next.js featuring user authentication, cart functionality, and event handling.",
      technologies: ["Next.js", "Clerk", "Inngest", "TypeScript"],
      category: "Full Stack"
    },
    {
      title: "Password Manager",
      description: "Secure password storage application with encrypted backend, intuitive UI, and real-time notifications.",
      technologies: ["React", "MongoDB", "Node.js", "Encryption"],
      category: "Security"
    },
    {
      title: "Food App Clone",
      description: "Complete food ordering platform with modern UI/UX, real-time ordering, and payment integration.",
      technologies: ["React", "Payment Gateway", "REST API"],
      category: "E-commerce"
    },
    {
      title: "E-commerce Website",
      description: "Full-featured online store with admin dashboard, payment processing, and responsive design.",
      technologies: ["React", "Payment Gateway", "Admin Panel", "Vercel"],
      category: "E-commerce"
    },
    {
      title: "Weather App",
      description: "Real-time weather application fetching data from external APIs with clean, intuitive interface.",
      technologies: ["JavaScript", "Weather API", "CSS"],
      category: "Web App"
    },
    {
      title: "Remote Sensing ML Project",
      description: "Machine learning solution for classifying satellite imagery using NDVI and deep learning models.",
      technologies: ["Python", "TensorFlow", "NDVI", "Landsat-8"],
      category: "Machine Learning"
    },
    {
      title: "GNSS Signal Classification",
      description: "Advanced signal processing project for LOS/NLOS classification using Random Forest algorithms.",
      technologies: ["Python", "Random Forest", "Signal Processing", "Excel"],
      category: "Machine Learning"
    }
  ];

  const categories = ["All", "Full Stack", "E-commerce", "Web App", "Security", "Machine Learning"];
  
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
              className="bg-card/50 backdrop-blur-sm border-border hover-lift hover:border-primary/50 transition-all duration-300 card-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
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
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;