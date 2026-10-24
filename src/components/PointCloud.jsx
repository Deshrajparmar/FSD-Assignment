
import { useEffect, useRef } from "react";
import * as THREE from "three";

const PointCloud = ()=> {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#020617");

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    camera.position.set(0, 5, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    container.appendChild(renderer.domElement);

    const grid = new THREE.GridHelper(20, 20, "#334155", "#1e293b");
    scene.add(grid);

    const geometry = new THREE.BufferGeometry();
    const points = [];

    for (let i = 0; i < 1500; i++) {
      points.push(
        (Math.random() - 0.5) * 12,
        Math.random() * 4,
        (Math.random() - 0.5) * 12
      );
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(points, 3)
    );

    const material = new THREE.PointsMaterial({
      color: "#38bdf8",
      size: 0.06,
    });

    const cloud = new THREE.Points(geometry, material);
    scene.add(cloud);

    let animationId;

    function animate() {
      animationId = requestAnimationFrame(animate);
      cloud.rotation.y += 0.001;
      renderer.render(scene, camera);
    }

    animate();

    function handleResize() {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      grid.geometry.dispose();
      grid.material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} className="h-full min-h-[400px] w-full" />;
}

export default PointCloud;
