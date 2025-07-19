import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Interactive Tableau dashboard analyzing 5 years of sales data across multiple regions, resulting in 15% increase in quarterly revenue.",
      technologies: ["Tableau", "SQL", "Python", "Excel"],
      metrics: ["15% Revenue Increase", "5M+ Data Points", "12 KPIs Tracked"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Customer Churn Prediction Model",
      description: "Machine learning model predicting customer churn with 92% accuracy, enabling proactive retention strategies for a SaaS company.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Power BI"],
      metrics: ["92% Accuracy", "25% Churn Reduction", "500k+ Customers"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Financial Risk Assessment",
      description: "Comprehensive risk analysis system for investment portfolio management, processing real-time market data and generating automated reports.",
      technologies: ["R", "SQL Server", "AWS", "D3.js"],
      metrics: ["Real-time Processing", "$50M Portfolio", "Daily Reports"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Healthcare Analytics Platform",
      description: "End-to-end analytics platform for hospital operations, optimizing patient flow and reducing wait times by 30%.",
      technologies: ["Python", "Apache Spark", "Tableau", "MongoDB"],
      metrics: ["30% Wait Time Reduction", "10+ Hospitals", "1M+ Patients"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world data science projects that delivered measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 group border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-primary/20 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Results</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div 
                        key={metricIndex} 
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="group"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    View Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary" size="lg">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};