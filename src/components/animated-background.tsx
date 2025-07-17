'use client';

import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function Stars(props: any) {
  const ref = useRef<any>();
  const [sphere, sphereColors] = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const p = new THREE.Vector3();
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
        p.set(
            Math.random() * 2 - 1,
            Math.random() * 2 - 1,
            Math.random() * 2 - 1,
        );
        p.normalize();
        p.multiplyScalar(Math.random() * 1.5 + 0.5);
        p.toArray(positions, i * 3);

        color.setHSL(0.6 + Math.random() * 0.1, 0.9, 0.7 + Math.random() * 0.1);
        color.toArray(colors, i * 3);
    }
    
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 45;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}


export default function AnimatedBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    )
}
