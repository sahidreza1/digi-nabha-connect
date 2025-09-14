import { GraduationCap, Menu, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-primary shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <GraduationCap className="h-8 w-8 text-primary-foreground" />
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">
                Nabha Digital Learning
              </h1>
              <p className="text-xs text-primary-foreground/80">
                Empowering Rural Education
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              <BookOpen className="h-4 w-4 mr-2" />
              Classes
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Users className="h-4 w-4 mr-2" />
              Teacher Dashboard
            </Button>
            <Button variant="secondary" size="sm">
              Login
            </Button>
          </nav>

          <Button variant="ghost" className="md:hidden text-primary-foreground">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;