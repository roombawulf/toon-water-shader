import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, Text } from "@react-three/drei";

import Orb from './Orb'

const range = (start, end, step = 1) => {
    let output = [];
    if (typeof end === "undefined") {
      end = start;
      start = 0;
    }
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }
    return output;
}

function Sphere(){

    const spheres = useRef()

    const cols = range(-10.0, 10.0, 2.0)
    const rows = range(-10.0, 10.0, 2.0)

    return(
        <group>
            {cols.map(col => 
                rows.map(row => (
                    <mesh position={[col,row, -15]}>
                        <icosahedronGeometry args={[0.5,0]} />
                        <meshPhysicalMaterial />
                    </mesh>
                ))
            )}
        </group>
    )
}

function Experience(){
    return (
        <div className="canvas-container">
            <Canvas dpr={[1, 2]}>
                <color attach="background" args={['black']} />
                <pointLight 
                    position={[2, 1, 5]} 
                    color={'lightblue'} 
                />
                <Sphere />
                <Orb />
                <OrbitControls/>
            </Canvas>
        </div>
    )
}
export default Experience