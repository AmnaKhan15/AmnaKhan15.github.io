import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const handleScrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="hero" className="min-h-screen flex items-center relative overflow-hidden section-padding">
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }} className="text-lg font-medium text-primary mb-2">
            Hello, I'm
          </motion.h2>
          
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.7
        }} className="text-5xl md:text-6xl font-bold mb-4">Amna Khan</motion.h1>
          
          <motion.h3 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.9
        }} className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Full Stack Developer
          </motion.h3>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 1.1
        }} className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
            Crafting elegant solutions for web and cloud environments. 
            Specializing in full stack development with expertise in 
            AWS cloud architecture and currently exploring Flutter for mobile apps.
          </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 1.3
        }} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" onClick={handleScrollToContact}>
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View my work</a>
            </Button>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 1.5
        }} className="mt-12 flex items-center justify-center md:justify-start gap-6">
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-primary"></div>
              <a href="#about" className="text-sm font-medium hover:text-primary">
                About me
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-primary"></div>
              <a href="#projects" className="text-sm font-medium hover:text-primary">
                Latest projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;