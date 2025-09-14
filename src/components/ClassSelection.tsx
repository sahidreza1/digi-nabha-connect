import { BookOpen, Calculator, FlaskConical, Globe, Clock, Palette, Music, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const classData = [
  {
    grade: "6",
    subjects: ["Mathematics", "Science", "English", "Hindi"],
    icon: Calculator,
    color: "bg-gradient-primary",
    students: "250+ Students",
  },
  {
    grade: "7", 
    subjects: ["Mathematics", "Science", "English", "Social Studies"],
    icon: FlaskConical,
    color: "bg-gradient-secondary",
    students: "300+ Students",
  },
  {
    grade: "8",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
    icon: Globe,
    color: "bg-gradient-primary",
    students: "280+ Students",
  },
  {
    grade: "9",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
    icon: BookOpen,
    color: "bg-gradient-secondary", 
    students: "320+ Students",
  },
  {
    grade: "10",
    subjects: ["Mathematics", "Physics", "Chemistry", "English"],
    icon: Trophy,
    color: "bg-gradient-primary",
    students: "290+ Students",
  },
  {
    grade: "11",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    icon: Palette,
    color: "bg-gradient-secondary",
    students: "180+ Students", 
  },
  {
    grade: "12",
    subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    icon: Music,
    color: "bg-gradient-primary",
    students: "160+ Students",
  }
];

const ClassSelection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Class
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive digital learning materials tailored for each grade level, 
            designed to work seamlessly with limited connectivity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {classData.map((classItem) => {
            const IconComponent = classItem.icon;
            return (
              <Card 
                key={classItem.grade}
                className="group relative overflow-hidden bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 cursor-pointer border-0"
              >
                <div className={`${classItem.color} h-2 w-full`}></div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          Class {classItem.grade}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {classItem.students}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-sm text-foreground">Subjects Available:</h4>
                    <div className="flex flex-wrap gap-2">
                      {classItem.subjects.map((subject) => (
                        <span 
                          key={subject}
                          className="px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-md"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-button transition-smooth"
                    onClick={() => {
                      // Here you can add navigation to specific class page
                      console.log(`Navigate to Class ${classItem.grade}`);
                    }}
                  >
                    Enter Class {classItem.grade}
                    <BookOpen className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClassSelection;