
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "The Social Byte",
    duration: "2024 - Present",
    description: [
      "Developer for building applications using React,Node.js,Next.js TypeScript, and AWS services.",
      "Mentored junior developers and conducted code reviews to maintain high quality standards.",
      "Exploring Flutter and Dart for cross-platform mobile application development.",
      "Designed and developed innovative solutions using AI-powered tools, leveraging expertise in coding prompt engineering to optimize interactions between humans and machines.",
"Crafted precise prompts to unlock the full potential of language models, ensuring seamless integration with front-end and back-end systems.",
      "Utilized expertise in AI tools to drive project innovation, improve efficiency, and enhance user experience.",
      "Collaborated with cross-functional teams to deliver high-quality projects, merging creativity with AI-driven insights."
    ],
    tags: ["React", "Node.js", "Rest-Express", "RESTful API","AWS","Amazon-Lightsail","S3","Cloudfront","Websockets","Flutter", "Dart", "AI Tools", "Prompt Engineering","Replit","Vercel"],
    
  },
  {
    title: "Frontend Developer",
    company: "PakIT Solutions",
    duration: "2022 - 2024",
    description: [
      "Developed responsive web applications using modern JavaScript frameworks.",
      "Built and maintained RESTful APIs and GraphQL endpoints.",
      "Implemented CI/CD pipelines for automated testing and deployment.",
      "Migrated legacy systems to cloud-based solutions using AWS."
    ],
  },
  {
    title: "Graphic Designer",
    company: "Logician Studio",
    duration: "2020 - 2021",
    description: [
      "designed and developed user interfaces for web and mobile applications.",
      "Created wireframes, prototypes, and high-fidelity designs using Figma and Adobe XD.",
      "Worked closely with developers to ensure design feasibility and implementation.",
      "Collaborated with designers to implement pixel-perfect, responsive designs.",
     
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development and cloud engineering.
          </p>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-muted hidden md:block"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="md:ml-12 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="hidden md:flex absolute -left-12 top-6 items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex justify-between items-start flex-col sm:flex-row">
                    <div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <p className="text-muted-foreground">{experience.company}</p>
                    </div>
                    <span className="text-sm bg-secondary px-3 py-1 rounded-full mt-2 sm:mt-0">
                      {experience.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-3">Education</h3>
          <div className="space-y-2">
            
            <p>
              <span className="font-medium">Associate Degree In Computer Science</span> -
              <span className="text-muted-foreground"> University of Central Punjab</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
