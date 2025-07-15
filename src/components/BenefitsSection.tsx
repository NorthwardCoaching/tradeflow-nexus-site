import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, Users, Shield, Zap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-cyan" />,
      title: "Increased Productivity",
      description: "Automate repetitive tasks and free your team to focus on high-value strategic work.",
      stat: "3x faster"
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-cyan" />,
      title: "24/7 Operations",
      description: "Your automated systems work around the clock, processing tasks even when you're asleep.",
      stat: "Always on"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-brand-cyan" />,
      title: "Cost Reduction",
      description: "Reduce operational costs and minimize human error while scaling your operations efficiently.",
      stat: "40% savings"
    },
    {
      icon: <Users className="w-8 h-8 text-brand-cyan" />,
      title: "Better Customer Experience",
      description: "Provide instant responses and consistent service quality that delights your customers.",
      stat: "98% satisfaction"
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-cyan" />,
      title: "Reduced Errors",
      description: "Eliminate human errors in critical processes with precise, consistent automation.",
      stat: "99.9% accuracy"
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-cyan" />,
      title: "Rapid Scalability",
      description: "Scale your operations instantly without proportional increases in headcount or costs.",
      stat: "Unlimited scale"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Transform Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of intelligent automation with measurable benefits 
            that drive real business results and competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-brand transition-all duration-300 border-border hover:border-brand-cyan/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-cyan/10 to-transparent rounded-bl-full"></div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
                  </div>
                  <div className="text-sm font-bold text-brand-navy bg-brand-cyan/10 px-2 py-1 rounded">
                    {benefit.stat}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-navy to-brand-cyan p-8 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 text-white/90">
              Join the automation revolution and unlock your company's full potential.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-brand-navy px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;