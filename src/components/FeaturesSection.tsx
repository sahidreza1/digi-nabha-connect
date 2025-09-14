import { 
  WifiOff, 
  Languages, 
  Smartphone, 
  BarChart3, 
  Download, 
  Users,
  Shield,
  Heart,
  Zap
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: WifiOff,
    title: "Offline Learning",
    description: "Complete lessons and exercises without internet connectivity. Download content when online and learn anytime.",
    color: "text-blue-600"
  },
  {
    icon: Languages,
    title: "Local Language Support", 
    description: "Content available in Punjabi, Hindi, and English to ensure better comprehension for rural students.",
    color: "text-green-600"
  },
  {
    icon: Smartphone,
    title: "Low-End Device Optimized",
    description: "Works smoothly on basic smartphones and tablets with minimal storage and processing requirements.",
    color: "text-orange-600"
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Teachers and students can monitor learning progress with detailed analytics and performance insights.",
    color: "text-purple-600"
  },
  {
    icon: Download,
    title: "Resource Downloads",
    description: "Download textbooks, videos, and interactive content for offline access during power outages.",
    color: "text-red-600"
  },
  {
    icon: Users,
    title: "Teacher Dashboard",
    description: "Comprehensive tools for educators to manage classes, assign homework, and track student engagement.",
    color: "text-indigo-600"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Child-safe content with privacy protection and secure data handling for student information.",
    color: "text-teal-600"
  },
  {
    icon: Heart,
    title: "Inclusive Design",
    description: "Designed specifically for rural education needs with cultural sensitivity and accessibility features.",
    color: "text-pink-600"
  },
  {
    icon: Zap,
    title: "Quick Access",
    description: "Fast loading times and efficient data usage to work well with limited internet bandwidth.",
    color: "text-yellow-600"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Rural Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform addresses the unique challenges faced by government schools in Nabha and surrounding rural areas, 
            ensuring quality education reaches every student.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-0 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-muted rounded-lg group-hover:scale-110 transition-transform">
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;