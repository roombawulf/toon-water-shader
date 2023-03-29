import { useFBO, MeshTransmissionMaterial } from '@react-three/drei'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { TransparentMaterial } from './materials/transparent-material/TransparentMaterial'

extend({ TransparentMaterial })

function Orb(){

    const { viewport, size} = useThree()
    const orb = useRef()
    const renderTarget = useFBO()

    useEffect(() => {
        console.log(orb.current.material)
    })

    useFrame((state) => {
        const {gl, scene, camera, clock} = state
        orb.current.visible = false
        gl.setRenderTarget(renderTarget)
        gl.render(scene, camera)

        orb.current.material.u_texture = renderTarget.texture
        gl.setRenderTarget(null)
        orb.current.visible = true

        // orb.current.position.x = 5 * Math.sin(clock.elapsedTime)

        

    })

    return(
        <>
            <mesh ref={orb} position={[0, 0, 0]}>
                <icosahedronGeometry args={[4,16]} />
                <transparentMaterial 
                    u_res={[
                        size.width * viewport.dpr,
                        size.height * viewport.dpr
                    ]}
                />
                {/* <MeshTransmissionMaterial
                    thickness={1.33}
                /> */}

            </mesh>
        </>
    )
}
export default Orb