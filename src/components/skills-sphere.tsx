'use client'

import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import { useTheme } from 'next-themes'

function Word({ children, position }: { children: string; position: [number, number, number] }) {
  const { theme } = useTheme();
  const color = new THREE.Color()
  const fontProps = {
    fontSize: 2.2,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  }
  const ref = useRef<any>()
  const [hovered, setHovered] = useState(false)
  
  const over = (e: any) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => { document.body.style.cursor = 'auto' }
  }, [hovered])

  useFrame(({ camera }) => {
    if (ref.current) {
        ref.current.quaternion.copy(camera.quaternion)
        
        const accentColor = theme === 'dark' ? 'hsl(182, 100%, 74%)' : 'hsl(182, 90%, 45%)';
        const foregroundColor = theme === 'dark' ? 'hsl(210, 40%, 98%)' : 'hsl(232, 30%, 15%)';
        
        ref.current.material.color.lerp(color.set(hovered ? accentColor : foregroundColor), 0.1)
    }
  })

  return <Text ref={ref} onPointerOver={over} onPointerOut={out} position={position} {...fontProps} children={children} />
}

function Cloud({ count = 6, radius = 25, words }: { count?: number; radius?: number; words: string[] }) {
    const wordList = useMemo(() => {
        const temp: [[number, number, number], string][] = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (count + 1)
        const thetaSpan = (Math.PI * 2) / count
        
        const shuffledWords = [...words].sort(() => 0.5 - Math.random());
        let wordIndex = 0;

        for (let i = 1; i < count + 1; i++) {
            for (let j = 0; j < count; j++) {
                if(wordIndex < shuffledWords.length) {
                    const vec3 = new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j));
                    temp.push([vec3.toArray(), shuffledWords[wordIndex]])
                    wordIndex++;
                }
            }
        }
        return temp
    }, [count, radius, words]);
  
    return <>{wordList.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)}</>
}

export function SkillsSphere({skills}: {skills: string[]}) {
  const { theme } = useTheme();
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Re-mount canvas on theme change to update fog color
    setKey(prev => prev + 1);
  }, [theme]);

  const fogColor = theme === 'dark' ? '#161a27' : '#f7f8fd';

  return (
    <div className="w-full h-[400px] md:h-[500px] cursor-grab">
        <Canvas key={key} dpr={[1, 2]} camera={{ position: [0, 0, 50], fov: 60 }}>
        <fog attach="fog" args={[fogColor, 50, 100]} />
        <Cloud count={5} radius={25} words={skills} />
        <TrackballControls noPan />
        </Canvas>
    </div>
  )
}
