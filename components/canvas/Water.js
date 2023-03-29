import { shaderMaterial, useFBO } from "@react-three/drei"
import { extend, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import * as THREE from 'three'

import vertexShader from './shaders/water-material/vertex.glsl'
import fragmentShader from './shaders/water-material/fragment.glsl'

const WaterMaterial = shaderMaterial(
    {
        u_depthTexture: null,
        u_winRes: new THREE.Vector2(),
        u_near: null,
        u_far: null,
        u_time: null
    },
    vertexShader,
    fragmentShader
)
extend({ WaterMaterial })

function Water(){

    const {viewport, size, camera} = useThree()
    const FBOSettings = {
        depth: true
    }
    const water = useRef()
    const renderTarget = useFBO(FBOSettings)

    useFrame((state) => {
        const {gl, scene, camera, clock} = state
        
        water.current.visible = false
        gl.setRenderTarget(renderTarget)
        gl.render(scene, camera)
        
        water.current.material.u_depthTexture = renderTarget.depthTexture
        gl.setRenderTarget(null)
        water.current.visible = true

        water.current.material.u_time = clock.elapsedTime
    })

    useEffect(() => {
        console.log(camera.projectionMatrixInverse)
    })
    return(
        <mesh 
            rotation={[-Math.PI/2, 0, 0]} 
            scale={3.35}
            position={[-0.1,0.2,0]}
            ref={water} 
        >
            <planeGeometry args={[1,1, 128, 128]}/>
            <waterMaterial 
                key={WaterMaterial.key}
                u_winRes={[size.width * viewport.dpr, size.height * viewport.dpr]} 
                u_near={camera.near}
                u_far={camera.far}
            />
        </mesh>
    )
}
export default Water