import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saicharanchilla7777@gmail.com",
      href: "mailto:saicharanchilla7777@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6304672098",
      href: "tel:+916304672098"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vijayawada, Andhra Pradesh",
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feel free to reach out via email or phone. I'd love to connect!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover-lift hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <info.icon className="h-5 w-5 text-primary" />
                  {info.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {info.href ? (
                  <a 
                    href={info.href}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
