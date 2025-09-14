import { ArrowRight, Wifi, Languages, Smartphone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Bridging the Digital
                <span className="text-accent"> Education Gap</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                Empowering rural students in Nabha with offline-capable digital learning, 
                local language support, and tools designed for low-connectivity environments.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Wifi className="h-5 w-5 text-accent" />
                <span className="text-sm">Offline Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <Languages className="h-5 w-5 text-accent" />
                <span className="text-sm">Local Languages</span>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone className="h-5 w-5 text-accent" />
                <span className="text-sm">Low-end Device Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-sm">Teacher Dashboard</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-accent hover:bg-accent-light text-accent-foreground shadow-button transition-smooth"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth"
              >
                Teacher Access
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hover">
              <img 
                src={heroImage} 
                alt="Students learning with digital devices in rural classroom" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;