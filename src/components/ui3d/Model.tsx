
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTheme } from "@/hooks/useTheme";
import * as THREE from "three";

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

const Model: React.FC<ModelProps> = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { isDarkMode } = useTheme();

  // Colors based on theme
  const primaryColor = isDarkMode ? "#b794f6" : "#9c5fff";
  const secondaryColor = isDarkMode ? "#4c1d95" : "#7c3aed";
  const accentColor = isDarkMode ? "#fbbf24" : "#f59e0b";

  // Create particles
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    if (groupRef.current) {
      // Main group rotation
      groupRef.current.rotation.y = elapsedTime * 0.1;
    }
    
    if (sphereRef.current) {
      // Sphere floating animation
      sphereRef.current.position.y = Math.sin(elapsedTime * 2) * 0.3;
      sphereRef.current.rotation.x = elapsedTime * 0.5;
      sphereRef.current.rotation.z = elapsedTime * 0.3;
    }
    
    if (torusRef.current) {
      // Torus rotation
      torusRef.current.rotation.x = elapsedTime * 0.8;
      torusRef.current.rotation.y = elapsedTime * 0.4;
    }
    
    if (ringRef.current) {
      // Ring rotation
      ringRef.current.rotation.z = elapsedTime * 0.6;
      ringRef.current.rotation.y = elapsedTime * 0.2;
    }
    
    if (particlesRef.current) {
      // Particles rotation
      particlesRef.current.rotation.y = elapsedTime * 0.05;
      particlesRef.current.rotation.x = elapsedTime * 0.02;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[position[0], position[1], position[2]]}
      rotation={[rotation[0], rotation[1], rotation[2]]}
      scale={scale}
    >
      {/* Main glowing sphere (globe) */}
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={primaryColor}
          roughness={0.1}
          metalness={0.9}
          emissive={primaryColor}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Orbiting torus (donut ring) */}
      <mesh ref={torusRef} position={[3, 0, 0]}>
        <torusGeometry args={[0.5, 0.2, 16, 100]} />
        <meshStandardMaterial
          color={secondaryColor}
          roughness={0.3}
          metalness={0.8}
          emissive={secondaryColor}
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Particles system */}
      <points ref={particlesRef}>
        <bufferGeometry attach="geometry" {...particlesGeometry} />
        <pointsMaterial
          attach="material"
          color={primaryColor}
          size={0.02}
          transparent
          opacity={0.6}
        />
      </points>

      {/* Wireframe sphere (circle) */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.5, 16, 16]} />
        <meshBasicMaterial
          color={primaryColor}
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
};

export default Model;
