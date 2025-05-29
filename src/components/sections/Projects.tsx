
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Cloud } from "lucide-react";

const projects = [
  {
    title: "The SocialBot | Website",
    description: "Developed the Socialbot website for the company The Social Byte , using Next.js, leveraging serverless architecture for the backend and Amazon DynamoDB for the database.",
    tags: ["Next.js", "TypeScript", "AWS", "Cloudfront","Go Daddy","S3","Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "https://www.thesocialbot.ai/",
  },
  {
    title: "The Socialbot | Product",
    description: "Auto Generate, schedule, and publish Social Media Content with The Social Bot’sCutting-Edge AI-Driven Platform for Seamless Management of Your Social Media Presence.",
    tags: ["React", "Node.js", "Rest-Express", "RESTful API","AWS","Amazon-Lightsail","S3","Cloudfront","Websockets"],
    githubUrl: "#",
    liveUrl: "https://app.thesocialbot.ai/",
  },
        {
    title: "CI/CD Pipeline for Web Application",
    description: "Implemented a CI/CD pipeline using GitHub Actions to automate the build, test, and deployment process for a web application. The pipeline includes steps for linting, testing, and deploying to AWS S3.",
  
    tags: ["Flutter", "Dart", "AWS Lambdas", "AWS CDK","App Development"],
    githubUrl: "#",
    liveUrl: "",
  },
   {
    title: "Curiosity Compass",
    description: "Cross platfrom App tO Help Navigate your Child interest through realtime AI Analysis and Recommendations | Status - In Progress ",
    tags: ["Flutter", "Dart", "AWS Lambdas", "AWS CDK","App Development"],
    githubUrl: "#",
    liveUrl: "",
  },


  {
    title: "Web Application with Image Processing",
    description: "Used AWS Lambda to handle HTTP requests and process images.- Implemented Amazon API Gateway to manage API endpoints and handle requests.-Stored images in Amazon S3 and used Amazon CloudFront for content delivery.- Utilized Amazon Cognito for user authentication and authorization.",
    tags: ["React", "Python", "Lambdas", "S3", "API Gateway", "Cognito"],
    githubUrl: "#",
    liveUrl: "https://app.thesocialbot.ai/",
  },
  {
    title: "HealHub | Mock project for Healthcare",
    description: "Focused on Interface design and user experience, HealHub is a mock project that showcases a healthcare platform. It features a responsive design with a modern UI, built using React and styled-components. The project includes user authentication, patient management, and appointment scheduling functionalities.",
    tags: ["Javascript", "Bootstap", "Github-Pages"],
    githubUrl: "#",
    liveUrl: "https://amnakhan15.github.io/healhub/",
  },
   
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/50 dark:bg-secondary/10 section-padding relative z-20">
      <div className="container mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work across web, cloud, and mobile platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow relative z-20">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
