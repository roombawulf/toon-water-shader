import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Bounds } from "@react-three/drei";
import Models from "./Models";
import Water from "./Water";



function Experience(){
    return (
        <div className="canvas-container">
            <Canvas camera={{position: [0,2,3]}}>
                <ambientLight color={'white'} intensity={0.5}/>
                <pointLight color={'orange'} intensity={1.0}/>
                <Models />
                <Water />
                <OrbitControls />
            </Canvas>
        </div>
    )
}
export default Experience