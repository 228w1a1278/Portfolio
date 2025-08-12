import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code2, Database, Cloud, Brain, Globe, Award } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries", 
      icon: Globe,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Cloud,
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Kubernetes", level: 70 },
        { name: "Ansible", level: 65 },
        { name: "Terraform", level: 65 },
        { name: "Salesforce", level: 80 }
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "Scikit-learn", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Remote Sensing", level: 70 }
      ]
    }
  ];

  const languages = ["English", "Telugu", "Hindi"];

  const achievements = [
    {
      title: "125+ LeetCode Problems",
      description: "Including Blind 75 challenges",
      icon: "💻"
    },
    {
      title: "160 Days DSA Practice",
      description: "Consistent practice on GeeksforGeeks",
      icon: "🎯"
    },
    {
      title: "Multiple Full-Stack Projects",
      description: "Built and deployed on Vercel",
      icon: "🚀"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Skills & Achievements</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with and milestones I've achieved
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border-border hover-lift hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Languages & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Languages */}
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-accent" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <Badge 
                    key={language}
                    variant="outline" 
                    className="border-accent/30 text-accent"
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-5 w-5 text-purple" />
                Key Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-lg">{achievement.icon}</span>
                  <div>
                    <h4 className="font-semibold text-sm">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;