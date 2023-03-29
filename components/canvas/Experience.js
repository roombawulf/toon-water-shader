import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";


function Sphere(){

    const sphere = useRef()
    useFrame(({clock}) => {
        sphere.current.rotation.y = 0.5 * clock.elapsedTime
        sphere.current.rotation.x = 0.5 * clock.elapsedTime
    })

    return(
        <mesh ref={sphere}>
            <icosahedronGeometry args={[1,0]} />
            <meshPhysicalMaterial />
        </mesh>
    )
}

function Experience(){
    return (
        <div className="canvas-container">
            <Canvas>
                <pointLight 
                    position={[2, 1, 5]} 
                    color={'lightblue'} 
                />
                <Sphere />
                <OrbitControls />
            </Canvas>
        </div>
    )
}
export default Experience