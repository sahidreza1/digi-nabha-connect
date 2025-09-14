import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8" />
              <div>
                <h3 className="font-bold text-lg">Nabha Digital Learning</h3>
                <p className="text-xs text-primary-foreground/80">Empowering Rural Education</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/90 leading-relaxed">
              Bridging the digital education gap in rural Punjab through accessible, 
              offline-capable learning solutions designed for government schools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#classes" className="block text-sm hover:text-accent transition-colors">All Classes</a>
              <a href="#features" className="block text-sm hover:text-accent transition-colors">Features</a>
              <a href="#teacher" className="block text-sm hover:text-accent transition-colors">Teacher Portal</a>
              <a href="#support" className="block text-sm hover:text-accent transition-colors">Support</a>
              <a href="#download" className="block text-sm hover:text-accent transition-colors">Download App</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Nabha, Punjab, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">info@nabhadigital.edu</span>
              </div>
            </div>
          </div>

          {/* Partnership & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect</h4>
            <p className="text-sm text-primary-foreground/90">
              In partnership with Punjab Education Department
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary-foreground/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2024 Nabha Digital Learning Platform. All rights reserved. | 
            <span className="text-accent"> Empowering Rural Education</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;