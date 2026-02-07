
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const CyberCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.rotation.z = time * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.5, 0]} />
        <MeshDistortMaterial
          color="#00f2ff"
          speed={3}
          distort={0.4}
          radius={1}
          emissive="#00f2ff"
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const LightStreaks = () => {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 50; i++) {
      p.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ] as [number, number, number],
        scale: Math.random() * 0.05 + 0.01
      });
    }
    return p;
  }, []);

  return (
    <group>
      {points.map((p, i) => (
        <mesh key={i} position={p.position}>
          <boxGeometry args={[0.02, 10, 0.02]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
        </mesh>
      ))}
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <CyberCore />
      <LightStreaks />
    </>
  );
};

export const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950">
      <Canvas shadows dpr={[1, 2]}>
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
    </div>
  );
};
