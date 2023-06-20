import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Models from "./Models";
import Water from "./Water";

function Experience(){

    return (
        <div className="canvas-container">
            <Canvas camera={{position: [0,2,2]}} shadows='soft'>
                <color attach="background" args={['#071416']} />
                <Environment files={"industrial_sunset_puresky_1k.hdr"} />
                <ambientLight intensity={0.1} color={'white'}/>
                <Models />
                <Water />
                <OrbitControls />
            </Canvas>
        </div>
    )
}
export default Experience