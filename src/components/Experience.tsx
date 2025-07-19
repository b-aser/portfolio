import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Analytics",
      position: "Senior Data Analyst",
      period: "2021 - Present",
      description: "Lead data analyst for enterprise clients, developing predictive models and automated reporting systems. Managed a team of 3 junior analysts.",
      achievements: [
        "Increased client revenue by $2M through strategic data insights",
        "Built automated ETL pipelines reducing processing time by 60%",
        "Implemented ML models with 95%+ accuracy for demand forecasting"
      ],
      technologies: ["Python", "Tableau", "AWS", "SQL Server"]
    },
    {
      company: "DataViz Solutions",
      position: "Data Analyst",
      period: "2019 - 2021",
      description: "Specialized in business intelligence and data visualization for mid-market companies across various industries.",
      achievements: [
        "Created 50+ interactive dashboards for C-level executives",
        "Reduced data processing time from hours to minutes",
        "Trained 100+ stakeholders on data-driven decision making"
      ],
      technologies: ["Power BI", "R", "PostgreSQL", "Excel VBA"]
    },
    {
      company: "Finance Analytics Inc",
      position: "Junior Data Analyst",
      period: "2018 - 2019",
      description: "Entry-level position focusing on financial data analysis and regulatory reporting for investment firms.",
      achievements: [
        "Automated monthly compliance reports saving 40 hours/month",
        "Developed risk assessment models for portfolio management",
        "Streamlined data collection processes across 5 departments"
      ],
      technologies: ["Excel", "SQL", "Python", "SPSS"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "University of Technology",
      period: "2016 - 2018",
      details: "Specialization in Machine Learning and Statistical Analysis"
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "State University",
      period: "2012 - 2016",
      details: "Minor in Computer Science, Magna Cum Laude"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">
              Building expertise across diverse industries and data challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Experience Timeline */}
            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Work Experience</h3>
              
              {experiences.map((exp, index) => (
                <Card key={index} className="relative hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">{exp.position}</h4>
                        <div className="flex items-center text-primary font-medium mt-1">
                          <Building2 className="h-4 w-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h5 className="font-semibold text-foreground text-sm">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-primary/20 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Education & Certifications */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
                
                {education.map((edu, index) => (
                  <Card key={index} className="mb-4 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-2">{edu.degree}</h4>
                      <div className="text-primary font-medium mb-2">{edu.institution}</div>
                      <div className="text-sm text-muted-foreground mb-2">{edu.period}</div>
                      <p className="text-sm text-muted-foreground">{edu.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Certifications</h3>
                <div className="space-y-3">
                  {[
                    "AWS Certified Data Analytics",
                    "Tableau Desktop Specialist",
                    "Google Analytics Certified",
                    "Microsoft Power BI Certified"
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};