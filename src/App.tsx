import { Deck, Heading, Slide, Text, SlideLayout } from "spectacle";
import "./App.css";

const reactCodeString = `
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count => count + 1)}>
      Clicked {count} times
    </button>
  );
}

`;

const threeCodeString = `
import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // Optional, black is default

// Set up lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

// Add a cube to the scene
const geometry = new THREE.BoxGeometry(3, 1, 3); // width, height, depth
const material = new THREE.MeshLambertMaterial({ color: 0xfb8e00 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0); // Optional, 0,0,0 is the default
scene.add(mesh);
`;

const reactThreeFiberCodeString = `
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={mesh}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  )
}

function Stage() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>,
  )
}
`;

const threeStringArray = [
  {
    title: "Maak Scene",
    code: `
import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Add a cube to the scene
const geometry = new THREE.BoxGeometry(3, 1, 3); // width, height, depth
const material = new THREE.MeshLambertMaterial({ color: 0xfb8e00 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0);
scene.add(mesh);
`,
  },
  {
    title: "Voeg licht toe",
    code: `
// Set up lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(10, 20, 0); // x, y, z
scene.add(directionalLight);

`,
  },
  {
    title: "Creëer camera",
    code: `
// Camera
const width = 10;
const height = width * (window.innerHeight / window.innerWidth);
const camera = new THREE.OrthographicCamera(
  width / -2, // left
  width / 2, // right
  height / 2, // top
  height / -2, // bottom
  1, // near
  100 // far
);

camera.position.set(4, 4, 4);
camera.lookAt(0, 0, 0);
`,
  },
  {
    title: "Render en voeg toe aan HTML",
    code: `
  
// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// Add it to HTML
document.body.appendChild(renderer.domElement);
`,
  },
] as const;

function App() {
  return (
    <Deck>
      <SlideLayout.Center>
        <Heading>Tim Mein</Heading>
        <Text>Freelance Web/Frontend Developer</Text>
      </SlideLayout.Center>
      <SlideLayout.List
        title="Wie ben ik?"
        items={[
          "10 jaar geleden afgestudeerd",
          "Software Engineering",
          "Freelance Web/Frontend Developer",
          "StreamLadder",
        ]}
      />
      <SlideLayout.Center>
        <Heading>3d Gamedevelopment op</Heading>
        <Heading> het web</Heading>
      </SlideLayout.Center>

      <SlideLayout.Center>
        <Heading>Waarom?</Heading>
      </SlideLayout.Center>

      <SlideLayout.List
        title="Wat gaan we doen"
        items={[
          "Websites in 2m",
          "Tools en frameworks voor development",
          "Live coding",
          "Deployen naar het web",
          "Jullie gaan zelf aan de slag!",
        ]}
      />

      <SlideLayout.HorizontalImage src="/web.png" />

      <SlideLayout.HorizontalImage title="Three.js" src="/three.png" />

      {threeStringArray.map(({ title, code }, index) => (
        <SlideLayout.Code
          key={index}
          title={title}
          codePaneProps={{
            language: "javascript",
            layout:{
              overflow: 'auto'
            }
          }}
        >
          {code}
        </SlideLayout.Code>
      ))}

      <SlideLayout.HorizontalImage title="React" src="/react.png" />

      <SlideLayout.Code
        codePaneProps={{
          language: "jsx",
        }}
      >
        {reactCodeString}
      </SlideLayout.Code>

      <SlideLayout.Center>
        <Heading>React Three Fiber</Heading>
      </SlideLayout.Center>

      <SlideLayout.Code
        codePaneProps={{
          language: "jsx",
        }}
      >
        {reactThreeFiberCodeString}
      </SlideLayout.Code>
    </Deck>
  );
}

export default App;
