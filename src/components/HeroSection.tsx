import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-brand-gray-light to-brand-blue-light overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M2 2h16v16H2V2zm4 4h8v8H6V6z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="10" cy="10" r="1" fill="currentColor"/>
              <path d="M10 2v4M10 14v4M2 10h4M14 10h4" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Business Name and Logo */}
        <div className="mb-16 text-center">
          <div className="flex flex-col items-center justify-center gap-8 mb-8">
            <img 
              src="/lovable-uploads/5445b61c-9450-4996-818c-9ea9af7ca195.png" 
              alt="Trades Flow Solutions Logo" 
              className="w-32 h-32 lg:w-40 lg:h-40 object-contain drop-shadow-2xl"
            />
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-brand-navy via-brand-cyan to-brand-navy bg-clip-text text-transparent tracking-wider drop-shadow-2xl animate-pulse">
              TRADES FLOW SOLUTIONS
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-brand-navy to-brand-cyan bg-clip-text text-transparent leading-tight">
              Automate Your Success
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Transform your business with cutting-edge AI and automation solutions. 
              We design intelligent workflows that scale your operations and amplify your results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="brand" 
                size="lg" 
                onClick={scrollToContact}
                className="text-lg px-8 py-4"
              >
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="brand-outline" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-brand-navy">98%</div>
                <div className="text-muted-foreground">Process Efficiency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-navy">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-navy">24/7</div>
                <div className="text-muted-foreground">Automation</div>
              </div>
            </div>
          </div>

          {/* Animated illustration */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-brand-cyan/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-brand-cyan/10 to-brand-navy/10 rounded-full animate-pulse delay-150"></div>
              <div className="absolute inset-8 bg-gradient-to-r from-brand-navy/30 to-brand-cyan/30 rounded-full animate-pulse delay-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="w-24 h-24 text-brand-cyan animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;