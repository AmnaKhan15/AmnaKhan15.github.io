
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Model from "./Model";
import { useIsMobile } from "@/hooks/use-mobile";

interface SceneProps {
  className?: string;
}

const Scene: React.FC<SceneProps> = ({ className = "" }) => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  
  // Mount effect to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`canvas-container fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: -10 }}
    >
      <Canvas 
        dpr={[1, 2]} 
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ zIndex: -10 }}
      >
        {/* Enhanced lighting setup */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <directionalLight position={[-10, -10, -5]} intensity={0.4} color="#4c1d95" />
        <pointLight position={[0, 0, 10]} intensity={0.5} color="#b794f6" />
        
        {/* Add fog for depth */}
        <fog attach="fog" args={['#0a0a0a', 5, 15]} />
        
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} scale={isMobile ? 0.6 : 1} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default Scene;
