import { shaderMaterial } from "@react-three/drei";
import * as THREE from 'three'

import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'

export const TransparentMaterial = shaderMaterial(
    { 
        u_texture: null, 
        u_res: new THREE.Vector2()

    },
    vertexShader,
    fragmentShader
)