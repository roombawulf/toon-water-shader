import { useGLTF } from "@react-three/drei";


export function Rock(props) {
    const { nodes, materials } = useGLTF("/rock.gltf");
    return (
      <group {...props} dispose={null} scale={0.15}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.menhir_mini.geometry}
          material={materials["color_main.001"]}
        />
      </group>
    );
}
useGLTF.preload("/rock.gltf");

function Landscape(props) {
    const { nodes, materials } = useGLTF("/low-poly_autumn_river.glb");
    return (
      <group {...props} dispose={null} scale={0.1}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-1.13, -2.5, -0.43]} scale={0.04}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pPlane5_grass_0.geometry}
                material={materials.grass}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pPlane5_Stone_0.geometry}
                material={materials.Stone}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pPlane5_Ground_0.geometry}
                material={materials.Ground}
              />
            </group>
            {/* <group position={[-0.8, 2.71, 0.15]} scale={0.01}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pPlane6_water_0.geometry}
                material={materials.water}
              />
            </group> */}
            <group
              position={[14.71, 6.46, -9.45]}
              rotation={[-0.78, 0.01, 0.31]}
              scale={0.01}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube142_lambert1_0.geometry}
                material={materials.lambert1}
              />
            </group>
            <group
              position={[14.78, -0.01, 0.93]}
              rotation={[-0.37, 0.71, -0.09]}
              scale={0.01}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube143_lambert1_0.geometry}
                material={materials.lambert1}
              />
            </group>
            <group
              position={[3.17, 11.73, 13.74]}
              rotation={[-3.12, 0.87, -1.32]}
              scale={0.01}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube144_lambert1_0.geometry}
                material={materials.lambert1}
              />
            </group>
            <group
              position={[3.77, 0, 35.29]}
              rotation={[-Math.PI, -1.01, -Math.PI]}
              scale={0.01}
            >
              <group
                position={[-4053.45, 917.47, 2930.32]}
                rotation={[2.44, 1.3, 0.79]}
                scale={2.02}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube147_Leaves_outline_0.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[-4020.16, 402.68, 3152.26]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder5_wood_0.geometry}
                  material={materials.wood}
                />
              </group>
              <group
                position={[-4053.14, 919.02, 2925.73]}
                rotation={[2.44, 1.3, 0.79]}
                scale={1.68}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube146_Autum_leaves_A_0.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group
                position={[-3701.9, 780.87, 3905.6]}
                rotation={[0.12, -0.74, 0.08]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube145_Autum_leaves_A_0.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group
                position={[-3623.79, 761.23, 4069.23]}
                rotation={[0.12, -0.74, 0.08]}
                scale={1.2}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube148_Leaves_outline_0.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
            </group>
            <group position={[-12.92, 9.8, 33.63]} scale={0.01}>
              <group position={[641.01, -534.2, -3337.59]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube151_Autum_leaves_A_0.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group position={[641.01, -534.2, -3337.59]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube149_Autum_leaves_A_0.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group position={[641.01, -534.2, -3337.59]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube152_Leaves_outline_0.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[641.01, -534.2, -3337.59]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube154_Leaves_outline_0.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[641.01, -534.2, -3337.59]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube153_Leaves_outline_0.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[641.01, -534.2, -3337.59]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube150_Autum_leaves_A_0.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group position={[641.01, -534.2, -3337.59]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder6_wood_0.geometry}
                  material={materials.wood}
                />
              </group>
            </group>
            <group
              position={[-13.38, -5.76, 16.92]}
              rotation={[-0.89, 1.13, 0.84]}
              scale={0.01}
            >
              <group
                position={[2492.43, 1060.1, 1193.2]}
                rotation={[2.44, 1.3, 0.79]}
                scale={2.02}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube147_Leaves_outline_0_1.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[2525.73, 545.3, 1415.14]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder5_wood_0_1.geometry}
                  material={materials.wood}
                />
              </group>
              <group
                position={[2492.75, 1061.65, 1188.62]}
                rotation={[2.44, 1.3, 0.79]}
                scale={1.68}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube146_Autum_leaves_A_0_1.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group
                position={[2843.99, 923.5, 2168.48]}
                rotation={[0.12, -0.74, 0.08]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube145_Autum_leaves_A_0_1.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group
                position={[2922.09, 903.86, 2332.12]}
                rotation={[0.12, -0.74, 0.08]}
                scale={1.2}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube148_Leaves_outline_0_1.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
            </group>
            <group
              position={[-17.02, 9.59, 21.5]}
              rotation={[-2.86, 0.14, -3.02]}
              scale={0.01}
            >
              <group position={[-370.41, -1392.94, 3123.83]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube151_Autum_leaves_A_0_1.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group position={[-370.41, -1392.94, 3123.83]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube149_Autum_leaves_A_0_1.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group position={[-370.41, -1392.94, 3123.83]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube152_Leaves_outline_0_1.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[-370.41, -1392.94, 3123.83]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube154_Leaves_outline_0_1.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[-370.41, -1392.94, 3123.83]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube153_Leaves_outline_0_1.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[-370.41, -1392.94, 3123.83]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube150_Autum_leaves_A_0_1.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group position={[-370.41, -1392.94, 3123.83]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder6_wood_0_1.geometry}
                  material={materials.wood}
                />
              </group>
            </group>
            <group
              position={[8.49, 8.89, 30.73]}
              rotation={[-0.12, -1.18, -0.01]}
              scale={0.01}
            >
              <group position={[-2874.42, -159.26, -1883.65]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube151_Autum_leaves_A_0_2.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group position={[-2874.42, -159.26, -1883.65]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube149_Autum_leaves_A_0_2.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group position={[-2874.42, -159.26, -1883.65]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube152_Leaves_outline_0_2.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[-2874.42, -159.26, -1883.65]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube154_Leaves_outline_0_2.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[-2874.42, -159.26, -1883.65]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube153_Leaves_outline_0_2.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[-2874.42, -159.26, -1883.65]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube150_Autum_leaves_A_0_2.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group position={[-2874.42, -159.26, -1883.65]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder6_wood_0_2.geometry}
                  material={materials.wood}
                />
              </group>
            </group>
            <group
              position={[-1.01, 7.8, 12.19]}
              rotation={[0.34, 0.66, -0.03]}
              scale={0.01}
            >
              <group
                position={[1488.8, -92.65, -258.15]}
                rotation={[2.44, 1.3, 0.79]}
                scale={2.02}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube147_Leaves_outline_0_2.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[1522.1, -607.45, -36.22]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder5_wood_0_2.geometry}
                  material={materials.wood}
                />
              </group>
              <group
                position={[1489.11, -91.1, -262.74]}
                rotation={[2.44, 1.3, 0.79]}
                scale={1.68}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube146_Autum_leaves_A_0_2.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group
                position={[1840.35, -229.26, 717.13]}
                rotation={[0.12, -0.74, 0.08]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube145_Autum_leaves_A_0_2.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group
                position={[1918.46, -248.89, 880.76]}
                rotation={[0.12, -0.74, 0.08]}
                scale={1.2}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube148_Leaves_outline_0_2.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
            </group>
            <group
              position={[18.9, 6.13, 57.94]}
              rotation={[2.44, -1.09, 2.47]}
              scale={0.01}
            >
              <group
                position={[-4217.57, 1031.71, 2452.7]}
                rotation={[2.44, 1.3, 0.79]}
                scale={2.02}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube147_Leaves_outline_0_3.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[-4184.27, 516.91, 2674.64]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder5_wood_0_3.geometry}
                  material={materials.wood}
                />
              </group>
              <group
                position={[-4217.25, 1033.26, 2448.11]}
                rotation={[2.44, 1.3, 0.79]}
                scale={1.68}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube146_Autum_leaves_A_0_3.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group
                position={[-3866.01, 895.1, 3427.98]}
                rotation={[0.12, -0.74, 0.08]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube145_Autum_leaves_A_0_3.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group
                position={[-3787.91, 875.47, 3591.61]}
                rotation={[0.12, -0.74, 0.08]}
                scale={1.2}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube148_Leaves_outline_0_3.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
            </group>
            <group
              position={[-9.09, -8.36, 50.99]}
              rotation={[-2.18, -0.9, -2.36]}
              scale={0.01}
            >
              <group
                position={[-4125.58, 361.77, 2082.7]}
                rotation={[-3.12, 1.04, 0.58]}
                scale={2.02}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube147_Leaves_outline_0_4.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[-4098.48, -140.29, 2313.65]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder5_wood_0_4.geometry}
                  material={materials.wood}
                />
              </group>
              <group
                position={[-4126.31, 365.46, 2079.61]}
                rotation={[-3.12, 1.04, 0.58]}
                scale={1.68}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube146_Autum_leaves_A_0_4.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group
                position={[-3780.23, 237.9, 3066.99]}
                rotation={[0.12, -0.74, 0.08]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube145_Autum_leaves_A_0_4.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group
                position={[-3702.12, 218.27, 3230.63]}
                rotation={[0.12, -0.74, 0.08]}
                scale={1.2}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube148_Leaves_outline_0_4.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
            </group>
            {/* <group position={[-0.8, 1.85, 0.15]} scale={0.01}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pPlane7_water_0.geometry}
                material={materials.water}
              />
            </group> */}
            {/* <group position={[-0.8, 1.17, 0.15]} scale={0.01}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pPlane8_water_0.geometry}
                material={materials.water}
              />
            </group> */}
            <group
              position={[-17.63, 2.68, 60.6]}
              rotation={[-2.86, -0.75, -2.6]}
              scale={0.01}
            >
              <group
                position={[376.97, 0, 3529.1]}
                rotation={[-Math.PI, -1.01, Math.PI]}
              >
                <group
                  position={[2194.24, 1544, 3213.2]}
                  rotation={[2.44, 1.3, 0.79]}
                  scale={2.02}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.pasted__pCube147_pasted__Leaves_outline_0.geometry
                    }
                    material={materials.pasted__Leaves_outline}
                  />
                </group>
                <group position={[2227.54, 1029.2, 3435.13]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pasted__pCylinder5_pasted__wood_0.geometry}
                    material={materials.pasted__wood}
                  />
                </group>
                <group
                  position={[2194.55, 1545.55, 3208.61]}
                  rotation={[2.44, 1.3, 0.79]}
                  scale={1.68}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.pasted__pCube146_pasted__Autum_leaves_A_0.geometry
                    }
                    material={materials.pasted__Autum_leaves_A}
                  />
                </group>
                <group
                  position={[2545.79, 1407.39, 4188.48]}
                  rotation={[0.12, -0.74, 0.08]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.pasted__pCube145_pasted__Autum_leaves_A_0.geometry
                    }
                    material={materials.pasted__Autum_leaves_A}
                  />
                </group>
                <group
                  position={[2623.9, 1387.76, 4352.11]}
                  rotation={[0.12, -0.74, 0.08]}
                  scale={1.2}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.pasted__pCube148_pasted__Leaves_outline_0.geometry
                    }
                    material={materials.pasted__Leaves_outline}
                  />
                </group>
              </group>
            </group>
            <group
              position={[-11.28, 8.1, 48.82]}
              rotation={[-0.23, -0.11, -0.21]}
              scale={0.01}
            >
              <group position={[203.56, 296.13, -3421.5]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube151_Autum_leaves_A_0_3.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group position={[203.56, 296.13, -3421.5]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube149_Autum_leaves_A_0_3.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group position={[203.56, 296.13, -3421.5]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube152_Leaves_outline_0_3.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[203.56, 296.13, -3421.5]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube154_Leaves_outline_0_3.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[203.56, 296.13, -3421.5]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube153_Leaves_outline_0_3.geometry}
                  material={materials.Leaves_outline}
                />
              </group>
              <group position={[203.56, 296.13, -3421.5]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube150_Autum_leaves_A_0_3.geometry}
                  material={materials.Autum_leaves_A}
                />
              </group>
              <group position={[203.56, 296.13, -3421.5]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder6_wood_0_3.geometry}
                  material={materials.wood}
                />
              </group>
            </group>
            <group
              position={[-1.02, -2.48, -2.71]}
              rotation={[0.44, 0.42, -0.64]}
              scale={0.01}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube155_lambert1_0.geometry}
                material={materials.lambert1}
              />
            </group>
            <group
              position={[-14.26, 4.63, -1.13]}
              rotation={[0.11, 0.21, 2.93]}
              scale={0.01}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube156_lambert1_0.geometry}
                material={materials.lambert1}
              />
            </group>
            <group
              position={[-6.84, 9.99, -13.54]}
              rotation={[0.16, -1.07, 2.15]}
              scale={0.01}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube157_lambert1_0.geometry}
                material={materials.lambert1}
              />
            </group>
            <group
              position={[-10.72, 10.19, 13.61]}
              rotation={[-2.34, -0.65, -1.46]}
              scale={0.01}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube158_lambert1_0.geometry}
                material={materials.lambert1}
              />
            </group>
            <group
              position={[8.05, 2.02, 0.68]}
              rotation={[-1.78, 0.53, 1.12]}
              scale={0.01}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube159_lambert1_0.geometry}
                material={materials.lambert1}
              />
            </group>
          </group>
        </group>
      </group>
    );
}
useGLTF.preload("/low-poly_autumn_river.glb");


function Models(){
    return(
        <>
            <Landscape />
            <Rock />
        </>
    )
}
export default Models
