import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Cloud, Globe, Award } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: Code2,
      skills: ["JavaScript", "Python", "React", "Next.js", "Node.js", "Tailwind CSS"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["Git", "Docker", "Kubernetes", "AWS", "Salesforce"]
    },
    {
      title: "Machine Learning",
      icon: Code2,
      skills: ["Scikit-learn", "TensorFlow", "Remote Sensing"]
    },
    {
      title: "Basics / Familiar With",
      icon: Globe,
      skills: ["React Native", "Solidity(Blockchain)", "Prompt Engineering"]
    }
  ];

  const languages = ["English", "Telugu", "Hindi"];

  const achievements = [
  {
    title: "Salesforce Administrator (Udemy Certified)",
    description: "Apr 2025",
    icon: "🎓"
  },
  {
    title: "Google Associate Cloud Engineer (ACE Certified)",
    description: "Jun 2025",
    icon: "☁️"
  },
  {
    title: "HackerRank Gold Badges",
    description: "Java, Python, SQL, Problem Solving",
    icon: "🏅"
  },
  {
    title: "DSA Practice",
    description: "Completed 160 days on GeeksforGeeks",
    icon: "💻"
  },
];


  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Skills & Achievements</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with, basics I have explored, and milestones I've achieved
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-card/50 backdrop-blur-sm border-border hover-lift hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs border-primary/30 text-primary/80">
                    {skill}
                  </Badge>
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
            <CardContent className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <Badge key={language} variant="outline" className="border-accent/30 text-accent">
                  {language}
                </Badge>
              ))}
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
