import React from 'react'
import { render } from 'react-dom'
import { Canvas } from 'react-three-fiber'

import Example from './Example'
import './sandbox-styles.css'

render(
  <Canvas>
    <Example />
  </Canvas>,
  document.getElementById('root')
)
