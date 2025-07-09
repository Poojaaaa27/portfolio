'use client'

import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'

function Word({ children, position }: { children: string; position: [number, number, number] }) {
  const color = new THREE.Color()
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
        
        // Hardcoding colors for dark theme to debug
        const accentColor = 'hsl(182, 100%, 74%)';
        const foregroundColor = 'hsl(210, 40%, 98%)';
        
        ref.current.material.color.lerp(color.set(hovered ? accentColor : foregroundColor), 0.1)
    }
  })

  return <Text ref={ref} onPointerOver={over} onPointerOut={out} position={position} fontSize={2.2} letterSpacing={-0.05} lineHeight={1} material-toneMapped={false}>{children}</Text>
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

export default function SkillsSphere({skills}: {skills: string[]}) {
  const fogColor = '#100a1f'; // Hardcoding dark theme fog

  return (
    <div className="w-full h-[400px] md:h-[500px] cursor-grab">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 50], fov: 60 }}>
            <fog attach="fog" args={[fogColor, 50, 100]} />
            <Cloud count={5} radius={25} words={skills} />
            <TrackballControls noPan />
        </Canvas>
    </div>
  )
}
