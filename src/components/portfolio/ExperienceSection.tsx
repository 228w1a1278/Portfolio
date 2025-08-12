import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in technology and education
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <Card className="bg-card/50 backdrop-blur-sm border-border hover-lift hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">B.Tech in Computer Science and Engineering</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Velagapudi Ramakrishna Siddhartha Engineering College, Vijayawada
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="text-muted-foreground mb-2 sm:mb-0">
                  Expected Graduation: 2026
                </p>
                <Badge variant="secondary" className="self-start sm:self-center">
                  In Progress
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="bg-card/50 backdrop-blur-sm border-border hover-lift hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl">Salesforce System Administrator</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Professional Experience
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Handled Salesforce administration tasks, customization, and data management to improve business processes.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-primary/30 text-primary">
                  Salesforce Administration
                </Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  Data Management
                </Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  Process Optimization
                </Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  System Customization
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;