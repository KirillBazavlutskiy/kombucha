/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 ./public/models/Cascara/Cascara.gltf
*/

import React, {useEffect, useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export function Cascara(props) {

    const groupRef = useRef();

    const rotationSpeedY = 0.006;
    const minAngleY = 1.2;
    const maxAngleY = 3.2;
    let directionY = 1;

    const rotationSpeedZ = 0.00005;
    // const rotationSpeedZ = 0.01;
    const minAngleZ = -0.01;
    const maxAngleZ = 0.01;
    let directionZ = 1;

    useFrame(() => {
        groupRef.current.rotation.y += rotationSpeedY * directionY;
        if (groupRef.current.rotation.y < minAngleY || groupRef.current.rotation.y > maxAngleY) {
            directionY *= -1;
        }

        groupRef.current.rotation.z += rotationSpeedZ * directionZ;
        if (groupRef.current.rotation.z < minAngleZ || groupRef.current.rotation.z > maxAngleZ) {
            directionZ *= -1;
        }
    });
    useEffect(() => {
        groupRef.current.position.y -= 12.5;
        groupRef.current.rotation.y = minAngleY;
    })

  const { nodes, materials } = useGLTF('/models/Cascara/Cascara.gltf')
  return (
    <group {...props} ref={groupRef} dispose={null}>
      <mesh geometry={nodes.Bottle_033_Wine001.geometry} material={materials['1001.050']} rotation={[0, -0.79, 0]}>
        <mesh geometry={nodes.Bottle_033_Wine002.geometry} material={materials['1001.050']} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/Cascara/Cascara.gltf')

export default Cascara;
