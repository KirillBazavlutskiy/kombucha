/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 ./public/models/Cascara/Cascara.gltf
*/

import React, {useEffect, useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export function Cascara(props) {

    const groupRef = useRef();

    const rotationSpeed = 0.006;
    const minAngle = 0.8;
    const maxAngle = 3.9;
    let direction = 1;

    useFrame(() => {
        groupRef.current.rotation.y += rotationSpeed * direction;
        if (groupRef.current.rotation.y < minAngle || groupRef.current.rotation.y > maxAngle) {
            direction *= -1;
        }
    });
    useEffect(() => {
        groupRef.current.position.y -= 12.5;
        groupRef.current.rotation.y = minAngle;
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
