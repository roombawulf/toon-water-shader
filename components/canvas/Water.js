import { shaderMaterial, useFBO, useTexture, useHelper } from "@react-three/drei"
import { extend, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import * as THREE from 'three'
import { useControls } from "leva"

import vertexShader from './shaders/water-material/vertex.glsl'
import fragmentShader from './shaders/water-material/fragment.glsl'
import { DirectionalLightHelper } from "three"

const WaterMaterial = shaderMaterial(
    {
        ...THREE.UniformsLib.lights,
        u_sceneTexture: null,
        u_depthTexture: null,
        u_dudvTexture: null,
        u_normalTexture: null,
        u_winRes: new THREE.Vector2(),
        u_near: null,
        u_far: null,
        u_time: null,
        u_absorbStrength: null,
        u_stepped: null,
        u_shine: null,
        u_diffuse: null,
    },
    vertexShader,
    fragmentShader,
    material => {
        material.lights = true
    }
)
extend({ WaterMaterial })

function Water(){

    const { stepped, absorbStrength, shine, diffuse, lightPos, lightColor } = useControls({
        stepped: {value: false},
        absorbStrength: {value: 2.0, min: 1.0, max:10.0, step: 0.1},
        shine: {value: 150, min: 0.0, max:200.0, step: 0.1},
        diffuse: {value: 0.1, min: 0.0, max:10.0, step: 0.1},
        lightPos: {x: 1.5, y: 0.0, z: -6.0},
        lightColor: '#003d45'
    })

    const dudvTexture = useTexture('/water_dudv.png')
    const normalTexture = useTexture('/water_normal.jpg')
    normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping

    const {viewport, size, camera} = useThree()
    const FBOSettings = {
        depth: true
    }
    const water = useRef()
    const light = useRef()
    const renderTarget = useFBO(FBOSettings)

    useFrame((state) => {
        const {gl, scene, camera, clock} = state
        
        water.current.visible = false
        gl.setRenderTarget(renderTarget)
        gl.render(scene, camera)
        water.current.material.u_sceneTexture = renderTarget.texture
        water.current.material.u_depthTexture = renderTarget.depthTexture
        gl.setRenderTarget(null)
        water.current.visible = true

        water.current.material.u_time = clock.elapsedTime
    })

    useEffect(() => {console.log(light)})

    useHelper(light, DirectionalLightHelper)

    return(
        <>
        <mesh 
            rotation={[-Math.PI/2, 0, 0]} 
            position={[-0.2,0.4,-0.62]}
            ref={water} 
        >
            <planeGeometry args={[3, 3.5, 512, 512]}/>
            <waterMaterial 
                key={WaterMaterial.key}
                u_dudvTexture={dudvTexture}
                u_normalTexture={normalTexture}
                u_winRes={[size.width * viewport.dpr, size.height * viewport.dpr]} 
                u_near={camera.near}
                u_far={camera.far}
                u_absorbStrength={absorbStrength}
                u_stepped={stepped}
                u_shine={shine}
                u_diffuse={diffuse}
            />
        </mesh>
        <directionalLight ref={light} color={lightColor} intensity={1.0} position={[lightPos.x, lightPos.y, lightPos.z]}/>
        </>

    )
}
export default Water