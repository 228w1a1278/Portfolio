import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const educationList = [
    {
      institution: "VRSiddhartha Engineering College",
      degree: "B.Tech in Information Technology",
      grade: "80%",
      year: "2022–2026 (Expected)",
      location: "Vijayawada, Andhra Pradesh, India",
      icon: GraduationCap
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate (MPC)",
      grade: "89.1%",
      year: "2022",
      location: "Vijayawada, Andhra Pradesh, India",
      icon: GraduationCap
    },
    {
      institution: "Subhodaya High School",
      degree: "AP SSC",
      grade: "90%",
      year: "2020",
      location: "Vijayawada, Andhra Pradesh, India",
      icon: GraduationCap
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic background and milestones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {educationList.map((edu, index) => (
            <Card
              key={edu.institution}
              className="bg-card/50 backdrop-blur-sm border-border hover-lift hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <edu.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{edu.institution}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {edu.degree} — <span className="font-medium">{edu.grade}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-1">Year: {edu.year}</p>
                <p className="text-sm text-muted-foreground">Location: {edu.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
