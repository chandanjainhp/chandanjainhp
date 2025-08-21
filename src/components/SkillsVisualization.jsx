import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const SkillsVisualization = () => (
  <div className="h-64">
    <Canvas>
      <mesh rotation={[0.4, 0.2, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="royalblue" />
      </mesh>
      <ambientLight />
      <OrbitControls enableZoom={false} />
    </Canvas>
  </div>
);

export default SkillsVisualization;
