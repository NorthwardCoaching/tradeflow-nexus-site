import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div>
            <img 
              src="/lovable-uploads/5445b61c-9450-4996-818c-9ea9af7ca195.png" 
              alt="Trades Flow Solutions Logo" 
              className="h-32 w-auto mb-4 drop-shadow-2xl bg-white/10 rounded-lg p-4"
            />
            <p className="text-white/80 mb-4">
              Transforming businesses through intelligent automation and AI solutions.
            </p>
            <p className="text-white/60 text-sm">
              © 2024 Tradeflow Solutions. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>n8n Workflow Design</li>
              <li>AI Chatbots</li>
              <li>Business Process Optimization</li>
              <li>Custom Integrations</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>hello@tradeflowsolutions.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Remote-First Team</li>
              <li>Serving Clients Worldwide</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>Built with precision and passion for automation excellence.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;