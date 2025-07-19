import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Database, Brain, TrendingUp } from "lucide-react";

export const About = () => {
  const skills = [
    "Python", "R", "SQL", "Tableau", "Power BI", "Excel", "Pandas", "NumPy",
    "Scikit-learn", "TensorFlow", "Apache Spark", "AWS", "Google Analytics",
    "Machine Learning", "Statistical Analysis", "Data Visualization"
  ];

  const highlights = [
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Creating compelling charts and dashboards that tell data stories"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Expert in SQL, NoSQL, and big data technologies"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Building predictive models and implementing AI solutions"
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Translating data insights into strategic business decisions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate data analyst with 5+ years of experience turning raw data into strategic insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">My Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                With a Master's degree in Data Science and extensive experience across finance, 
                healthcare, and tech industries, I specialize in extracting meaningful insights 
                from complex datasets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans the entire data analytics lifecycle - from data collection 
                and cleaning to advanced modeling and visualization. I'm passionate about making 
                data accessible and actionable for stakeholders at all levels.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <item.icon className="h-8 w-8 text-primary mb-3" />
                      <h4 className="font-semibold text-sm text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};