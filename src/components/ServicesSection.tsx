import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, Cog, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Workflow className="w-12 h-12 text-brand-cyan" />,
      title: "n8n Workflow Design",
      description: "Custom automation workflows that connect your tools and streamline operations. From simple task automation to complex multi-system integrations.",
      features: ["Custom workflow development", "System integrations", "Process optimization", "Scalable solutions"]
    },
    {
      icon: <Bot className="w-12 h-12 text-brand-cyan" />,
      title: "AI Chatbots",
      description: "Intelligent conversational AI that handles customer queries, provides support, and qualifies leads 24/7 with human-like interactions.",
      features: ["Natural language processing", "Multi-platform deployment", "Custom training", "Analytics & insights"]
    },
    {
      icon: <Cog className="w-12 h-12 text-brand-cyan" />,
      title: "Business Process Optimization",
      description: "Comprehensive analysis and redesign of your business processes to eliminate bottlenecks and maximize efficiency.",
      features: ["Process analysis", "Workflow optimization", "Performance monitoring", "Continuous improvement"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in three key areas that transform how businesses operate, 
            delivering measurable results through intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-brand transition-all duration-300 border-border hover:border-brand-cyan/50">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl mb-2 text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-brand-cyan mr-2 flex-shrink-0" />
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

export default ServicesSection;