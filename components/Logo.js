"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { useGLTF, Text } from '@react-three/drei';
import { TextureLoader } from 'three';

function RotatingLogo(props) {
  const logoRef = useRef();
  const { nodes, materials } = useGLTF('/logo.glb');
  const { viewport, gl } = useThree();
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  useFrame(() => {
    if (logoRef.current) {
      if (!isDragging) {
        logoRef.current.rotation.y += 0.01;
      } else {
        logoRef.current.rotation.y = rotationY;
      }
    }
  });

  useEffect(() => {
    const handleStart = (event) => {
      setIsDragging(true);
      setDragStartX(event.clientX);
    };

    const handleMove = (event) => {
      if (isDragging) {
        const deltaX = event.clientX - dragStartX;
        const rotation = rotationY + deltaX * 0.005;
        setRotationY(rotation);
        setDragStartX(event.clientX);
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handleStart);
    canvas.addEventListener('pointermove', handleMove);
    canvas.addEventListener('pointerup', handleEnd);
    canvas.addEventListener('pointercancel', handleEnd);

    return () => {
      canvas.removeEventListener('pointerdown', handleStart);
      canvas.removeEventListener('pointermove', handleMove);
      canvas.removeEventListener('pointerup', handleEnd);
      canvas.removeEventListener('pointercancel', handleEnd);
    };
  }, [isDragging, dragStartX, rotationY, gl.domElement]);

  return (
    <group ref={logoRef} dispose={null} scale={viewport.width / 25} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials['Material.004']}
        position={[-0.008, -0.001, 0.002]}
        rotation={[-Math.PI, 0, 0]}
        scale={[1.018, 2.004, 1.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials['Material.005']}
        position={[0.003, 0, -0.001]}
        rotation={[-Math.PI, 0, 0]}
        scale={[1.018, 2.004, 1.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials['Material.006']}
        position={[0.004, 0, 0.003]}
        rotation={[-Math.PI, 0, 0]}
        scale={[1.018, 2.004, 1.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials['Material.007']}
        position={[-0.005, 0, -0.003]}
        rotation={[-Math.PI, 0, 0]}
        scale={[1.018, 2.004, 1.022]}
      />
    </group>
  );
}

function SceneContent() {
  const texture = useLoader(TextureLoader, "/bgn.jpg");
  const { viewport } = useThree();

  return (
    <>
      <Text
        position={[-4.6, 0, 0]}
        font="/PPNeueMontreal-Bold.otf"
        fontSize={0.13 * viewport.width}
        anchorX="center"
        anchorY="middle"
        color="#69a1fc"
      >
        Sheena
        <meshStandardMaterial map={texture} />
      </Text>
      <Text
        position={[5, 0, 0]}
        font="/PPNeueMontreal-Bold.otf"
        fontSize={0.13 * viewport.width}
        anchorX="center"
        anchorY="middle"
        color="#00e654"
      >
        Seeds
        <meshStandardMaterial map={texture} />
      </Text>
      <RotatingLogo />
    </>
  );
}

export default function Logo() {
  return (
    <Canvas camera={[1,1,1]}>
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 2]} intensity={7} />
      <SceneContent />
    </Canvas>
  );
}
