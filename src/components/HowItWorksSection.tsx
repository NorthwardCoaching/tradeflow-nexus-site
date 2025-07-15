import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Lightbulb, Wrench, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      number: "01",
      title: "Discovery & Analysis",
      description: "We dive deep into your current processes, identifying pain points and opportunities for automation."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      number: "02", 
      title: "Strategy & Design",
      description: "Custom solution design tailored to your specific needs, ensuring maximum ROI and seamless integration."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      number: "03",
      title: "Implementation",
      description: "Expert development and deployment of your automation solutions with rigorous testing and quality assurance."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      number: "04",
      title: "Launch & Optimize",
      description: "Go-live support, training, and continuous optimization to ensure peak performance and adaptation."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-gray-light to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology ensures successful automation implementation 
            from concept to completion, with your success as our primary focus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-brand transition-all duration-300 border-border hover:border-brand-cyan/50">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-navy to-brand-cyan rounded-full flex items-center justify-center mx-auto text-white group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-cyan text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                <CardTitle className="text-xl mb-2 text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
              
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-brand-cyan to-transparent transform -translate-y-1/2"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;