import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x141824, 0.04);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Clear any previous canvas
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const tealLight = new THREE.PointLight(0x14b8a6, 4, 60);
    tealLight.position.set(-15, 10, 10);
    scene.add(tealLight);

    const copperLight = new THREE.PointLight(0xb87333, 4, 60);
    copperLight.position.set(15, -10, 10);
    scene.add(copperLight);

    // Create 3D floating geometries representing Logo (Icosahedron), Poster (TorusKnot/Plane), Presentation (Cube/Pyramid)
    const objects: THREE.Object3D[] = [];
    const group = new THREE.Group();
    scene.add(group);

    const materialNavyWire = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const materialGoldWire = new THREE.MeshBasicMaterial({
      color: 0xb87333,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const materialSteelWire = new THREE.MeshBasicMaterial({
      color: 0xa1a1aa,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    // 1. Icosahedron (Logo vibe)
    const geom1 = new THREE.IcosahedronGeometry(3, 1);
    const mesh1 = new THREE.Mesh(geom1, materialNavyWire);
    mesh1.position.set(-12, 6, -5);
    group.add(mesh1);
    objects.push(mesh1);

    // 2. Torus (Poster waveform vibe)
    const geom2 = new THREE.TorusGeometry(3.5, 1.2, 16, 40);
    const mesh2 = new THREE.Mesh(geom2, materialGoldWire);
    mesh2.position.set(14, 5, -8);
    group.add(mesh2);
    objects.push(mesh2);

    // 3. Octahedron (Presentation Pyramid vibe)
    const geom3 = new THREE.OctahedronGeometry(3.2, 0);
    const mesh3 = new THREE.Mesh(geom3, materialSteelWire);
    mesh3.position.set(10, -8, -4);
    group.add(mesh3);
    objects.push(mesh3);

    // 4. Dodecahedron
    const geom4 = new THREE.DodecahedronGeometry(2.5, 0);
    const mesh4 = new THREE.Mesh(geom4, materialNavyWire);
    mesh4.position.set(-10, -7, -6);
    group.add(mesh4);
    objects.push(mesh4);

    // 5. Floating background particles
    const particleCount = 200;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 80;
      positions[i + 1] = (Math.random() - 0.5) * 80;
      positions[i + 2] = (Math.random() - 0.5) * 60 - 10;
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x5eead4,
      size: 0.15,
      transparent: true,
      opacity: 0.55
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    group.add(particles);

    // Mouse interactive tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.005;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.005;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      // Smooth mouse damping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y = targetX * 0.4 + time * 0.05;
      group.rotation.x = targetY * 0.4 + Math.sin(time * 0.2) * 0.1;

      // Individual object rotations & floating
      objects.forEach((obj, index) => {
        obj.rotation.x += 0.004 * (index % 2 === 0 ? 1 : -1);
        obj.rotation.y += 0.006 * (index % 3 === 0 ? 1 : -1);
        obj.position.y += Math.sin(time + index * 1.5) * 0.008;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      materialNavyWire.dispose();
      materialGoldWire.dispose();
      materialSteelWire.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-80"
    />
  );
};
