
import React, { useEffect, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Scene from "@/components/ui3d/Scene";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Amna Khan | Full Stack Developer";
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* 3D Scene Background */}
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Content Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
        
        <footer className="py-8 text-center text-muted-foreground border-t">
          <div className="container mx-auto">
            <p>© {new Date().getFullYear()} Amna Khan. All rights reserved.</p>
            <p className="text-sm mt-2">
              Full Stack Developer specializing in web, cloud, and mobile development
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
