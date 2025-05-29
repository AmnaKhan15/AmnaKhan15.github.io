import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
const skills = [{
  name: "Frontend",
  items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
}, {
  name: "Backend",
  items: ["Node.js", "Express", "Python", "TypeScript", "Javascript", "REST APIs", "PostgreSQL"]
}, {
  name: "Cloud & DevOps",
  items: ["AWS", "Amazon - LightSail", "CI/CD", "S3", "CloudFront", "Lambda", "API Gateway", "DynamoDB", "Cognito"]
}, {
  name: "Mobile & More",
  items: ["Flutter", "Dart", "Firebase", "Replit", "Vercel", "GitHub Actions", "Prompt Engineering", "AI Tools","FlutterFlow"]
}];
const About = () => {
  return <section id="about" className="py-24 relative section-padding">
    <div className="container mx-auto">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.5
      }} className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.5
        }}>
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>Full-stack dev | Code enthusiast | Always learning</p>
            <p>I'm a passionate Full Stack Developer with 2+ years of experience building web applications and cloud solutions. My journey in tech began with frontend development, which quickly evolved into a full stack role as I discovered the joy of working across the entire application stack.</p>
            <p>
              With a background in Computer Science and a focus on cloud technologies, I've led projects
              that span from responsive web applications to complex AWS-powered infrastructures. I believe in
              writing clean, efficient code and building systems that are both powerful and user-friendly.
            </p>
            <p>
              Currently, I'm expanding my skills into mobile development with Flutter and Dart, exploring
              new ways to create cross-platform experiences that maintain the same quality and performance
              as my web applications.
            </p>
            <p>Vibes 🌈</p>

            <p>Collaboration | Innovation | Good vibes only</p>

            <p>Stay Lit 🔥</p>

            <p>Let's build something fire together! 💥</p>
          </div>
        </motion.div>

        <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.5
        }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map(category => <Card key={category.name} className="overflow-hidden">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold mb-3 text-primary">
                {category.name}
              </h4>
              <ul className="space-y-2">
                {category.items.map(skill => <li key={skill} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span className="text-sm">{skill}</span>
                </li>)}
              </ul>
            </CardContent>
          </Card>)}
        </motion.div>
      </div>
    </div>
  </section>;
};
export default About;