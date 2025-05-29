import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
const navItems = [{
  label: "Home",
  href: "#hero"
}, {
  label: "About",
  href: "#about"
}, {
  label: "Projects",
  href: "#projects"
}, {
  label: "Experience",
  href: "#experience"
}, {
  label: "Blog",
  href: "#blog"
}, {
  label: "Contact",
  href: "#contact"
}];
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Find the current section
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }) || "hero";
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };
  return <>
      <motion.header initial={{
      y: -100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      duration: 0.5
    }} className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${isScrolled ? "glass shadow-lg" : ""}`}>
        <div className="container mx-auto flex items-center justify-between">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2
        }} className="text-xl font-bold text-primary">Amnakhan.dev</motion.div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(item => <motion.a key={item.href} href={item.href} onClick={e => {
            e.preventDefault();
            handleNavClick(item.href);
          }} className={`text-sm font-medium hover:text-primary transition-colors ${activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"}`} initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.3
          }} whileHover={{
            scale: 1.05
          }}>
                {item.label}
              </motion.a>)}
          </nav>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="fixed inset-0 z-40 pt-20 glass md:hidden">
            <nav className="flex flex-col space-y-6 p-6">
              {navItems.map(item => <motion.a key={item.href} href={item.href} onClick={e => {
            e.preventDefault();
            handleNavClick(item.href);
          }} className={`text-lg font-medium hover:text-primary transition-colors ${activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"}`} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                  {item.label}
                </motion.a>)}
            </nav>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default Navigation;