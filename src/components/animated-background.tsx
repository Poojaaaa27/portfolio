'use client';

import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useMemo(() => {
    const sphere = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      let p = new THREE.Vector3();
      p.setFromSpherical(new THREE.Spherical(2 + Math.random() * 2, Math.acos(2 * Math.random() - 1), Math.random() * 2 * Math.PI));
      p.toArray(sphere, i * 3);
    }
    return [sphere];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#7DF9FF"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 w-full h-full -z-20">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}