import { Sphere } from '@react-three/drei'
import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { Mesh } from 'three'

type Props = {}

export default function Example({}: Props) {
  const ref = useRef<Mesh>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01
    }
  })

  return (
    <group>
      <Sphere ref={ref} args={[1, 32, 32]}>
        <meshNormalMaterial />
      </Sphere>
    </group>
  )
}
