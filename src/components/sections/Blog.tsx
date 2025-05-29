
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "J.P. Morgan - Software Engineering Job Simulation",
    excerpt: "Learnings: Interface with a stock price data feed,Use JPMorgan Chase & Co. frameworks and tools,Display data visually for tradersBonus task: Open source contribution",
    category: "Open Source Contribution",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_W5Zxq7yKYPHyJcW8N_1705945443450_completion_certificate.pdf",
  },
  {
    title: "AWS Virtual Experience Program",
    excerpt: "Learnings: Build a serverless application using AWS Lambda, API Gateway, and DynamoDB,Implement authentication and authorization with Amazon Cognito,Deploying and Hosting a web application using AWS Lightsail & S3",
    category: "Amazon",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_W5Zxq7yKYPHyJcW8N_1727336893602_completion_certificate.pdf",
  },
  {
    title: "Skyscanner - Front-End Software Engineering",
    excerpt: "Completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner., Developed a page forpicking a travel date using Skyscanner’s open-source Backpack React library., Customised my application and ran automated tests to ensure itrendered properly",
    category: "Frontend",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Skyscanner/km4rw7dihDr3etqom_Skyscanner_W5Zxq7yKYPHyJcW8N_1699985939027_completion_certificate.pdf",
  },
  {
    title: "Accenture Nordics - Developer Job Simulation Accenture Nordics",
    excerpt: "Define technical requirements Design changes to an existing architecture -Scale on-premise system infrastructure to the cloud - Reading and understanding code Attention to detail Debugging algorithms - Unit testing User Acceptance Testing - UAT Security maturity assessment -IAM policies and permissions Securing the software development lifecycle (SDLC) - Shaping the Problem Data and privacy",
    category: "SDLC",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/PxenP4rHNE6Bh4nQz_Accenture%20Nordics_W5Zxq7yKYPHyJcW8N_1702566761937_completion_certificate.pdf",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-secondary/50 dark:bg-secondary/10 section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learnings to enhance my skills and stay updated with the latest technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <a href={post.url}>{post.title}</a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="text-primary" asChild>
                    <a href={post.url}>See Certificate →</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            These certifications reflect my commitment to continuous learning and professional growth in the tech industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
