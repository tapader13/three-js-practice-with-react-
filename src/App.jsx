import React, { useRef, useState } from 'react';
import './App.css';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import {
  Center,
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  RenderTexture,
  Text,
  Text3D,
  useHelper,
  PerspectiveCamera,
  Sphere,
} from '@react-three/drei';
import { DirectionalLightHelper } from 'three';
// const RotatingBox = () => {
//   const ref = useRef();
//   useFrame((state, delta) => {
//     ref.current.rotation.x += delta * 2;
//     ref.current.position.y = Math.sin(state.clock.startTime);
//     ref.current.position.z = Math.sin(state.clock.elapsedTime);
//   });

//   return (
//     <>
//       <mesh position={[2, 0, 0]} ref={ref}>
//         <boxGeometry args={[2, 2, 3]} />
//         <meshStandardMaterial color='red' />
//       </mesh>
//     </>
//   );
// };
// const RotatingBoxWithText = () => {
//   const ref = useRef();
//   useFrame((state, delta) => {
//     ref.current.position.x = Math.sin(state.clock.elapsedTime);
//   });

//   return (
//     <>
//       <mesh>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial>
//           <RenderTexture attach={'map'}>
//             <PerspectiveCamera makeDefault position={[0, 0, 2]} />
//             <color attach={'background'} args={['pink']} />
//             <Text fontSize={1.5} color={'black'} ref={ref}>
//               hello
//             </Text>
//           </RenderTexture>
//         </meshStandardMaterial>
//       </mesh>
//     </>
//   );
// };
// const SphereGeometry = () => {
//   const ref = useRef();
//   const [isHover, setIsHover] = useState(false);
//   useFrame((state, delta) => {
//     ref.current.rotation.x += isHover ? delta * 0.7 : delta * 0.3;

//     ref.current.position.y = Math.sin(state.clock.startTime);
//     {
//       isHover
//         ? (ref.current.position.z = Math.sin(state.clock.elapsedTime))
//         : '';
//     }
//   });

//   return (
//     <>
//       <mesh
//         position={[2, 0, 0]}
//         ref={ref}
//         onPointerEnter={(event) => (event.stopPropagation(), setIsHover(true))}
//         onPointerLeave={() => setIsHover(false)}
//       >
//         <sphereGeometry />
//         <meshStandardMaterial color={isHover ? 'red' : 'green'} wireframe />
//       </mesh>
//     </>
//   );
// };

// const TorusKnotGeometry = () => {
//   const directionalLightRef = useRef();
//   useHelper(directionalLightRef, DirectionalLightHelper, 0.7, 'white');
//   return (
//     <>
//       <directionalLight position={[0, 1, 2]} ref={directionalLightRef} />

//       <mesh position={[0, -1, 0]}>
//         <torusKnotGeometry args={[2, 0.2, 16, 50]} />
//         <meshStandardMaterial color='red' />
//         {/* <MeshWobbleMaterial factor={5} speed={1} /> */}
//         {/* <MeshDistortMaterial color={'red'} distort={1} speed={1} /> */}
//       </mesh>
//     </>
//   );
// };

const App = () => {
  return (
    <div style={{ position: 'relative', width: '600px' }}>
      {/* <Canvas camera={{ fov: 25, position: [5, 5, 5] }}> */}
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        {/* <RotatingBox />    */}
        {/* <RotatingBoxWithText /> */}
        {/* <SphereGeometry /> */}
        {/* <TorusKnotGeometry /> */}
        <OrbitControls autoRotate enableZoom={false} />

        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 220, 350]} scale={3}>
          <MeshDistortMaterial
            color='#3d1c56'
            attach='material'
            distort={0.5}
            speed={2}
          />
        </Sphere>

        {/* <group position={[0, 1, 0]}> */}
        {/* Box Geometry */}
        {/* <mesh position={[2, 0, 0]} ref={ref}>
          <boxGeometry args={[2, 2, 3]} />
          <meshStandardMaterial color='red' />
        </mesh> */}
        {/* Sphere Geometry */}
        {/* Radius, width segments, height segments */}
        {/* <mesh position={[-2, 0, 0]} ref={ref}>
          <sphereGeometry args={[1, 32, 32]} />{' '}
          <meshStandardMaterial color='blue' />
        </mesh> */}
        {/* Cone Geometry */}
        {/* Radius, height, radial segments */}
        {/* <mesh position={[2, -2, 0]}>
          <coneGeometry args={[1.5, 3, 24]} />{' '}
          <meshStandardMaterial color='green' />
        </mesh> */}
        {/* Cylinder Geometry */}
        {/* Top radius, bottom radius, height, radial segments */}
        {/* <mesh position={[-2, -2, 0]}>
          <cylinderGeometry args={[1.5, 1.5, 2, 24]} />{' '}
          <meshStandardMaterial color='yellow' />
        </mesh> */}
        {/* </group> */}
        {/* Torus Geometry */}
        {/* Radius, tube, radial segments, tubular segments */}
        {/* <mesh position={[0, 0, 0]}>
          <torusGeometry args={[2, 0.5, 16, 100, 5]} />{' '}
          <meshStandardMaterial color='purple' />
        </mesh> */}
        {/* TorusKnotGeometry */}
        {/* Radius, tube, radial segments, tubular segments, p, q */}
        {/* <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[3, 0.3, 16, 100, 3, 2]} />{' '}
          <meshStandardMaterial color='orange' />
        </mesh> */}
      </Canvas>
      <img
        style={{
          height: '400px',
          width: '400px',
          position: 'absolute',
          left: '50px',
          top: '0',
        }}
        src='../moon.png'
        alt=''
      />
    </div>
  );
};

export default App;
