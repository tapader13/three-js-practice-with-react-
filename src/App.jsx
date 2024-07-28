import React, { useRef, useState } from 'react';
import './App.css';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import {
  Center,
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  Text3D,
  useHelper,
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

const TorusKnotGeometry = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper, 0.7, 'white');
  return (
    <>
      <directionalLight position={[0, 1, 2]} ref={directionalLightRef} />

      <mesh position={[0, -1, 0]}>
        <torusKnotGeometry args={[2, 0.2, 16, 50]} />
        <meshStandardMaterial color='red' />
        {/* <MeshWobbleMaterial factor={5} speed={1} /> */}
        {/* <MeshDistortMaterial color={'red'} distort={1} speed={1} /> */}
      </mesh>
    </>
  );
};

const App = () => {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} />
        {/* <RotatingBox /> */}
        {/* <SphereGeometry /> */}
        <TorusKnotGeometry />
        <OrbitControls />

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
    </div>
  );
};

export default App;
