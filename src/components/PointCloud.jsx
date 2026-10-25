
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader.js";

const PointCloud = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Create the 3D scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#020617");

    // Create the camera
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    camera.position.set(0, 5, 12);
    camera.up.set(0, 1, 0);
    camera.lookAt(0, 0, 0);

    // Create the renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Add mouse controls
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 0, 0);
    controls.update();

    // Add ground grid
    const grid = new THREE.GridHelper(
      20,
      20,
      "#334155",
      "#1e293b"
    );

    scene.add(grid);

    // Load the PCD file
    const loader = new PCDLoader();

    loader.load(
      "/models/room.pcd",
      (pointCloud) => {
        pointCloud.material.size = 0.06;
        pointCloud.material.color.set("#38bdf8");

        // Rotate the point cloud to adjust its orientation
        pointCloud.rotation.x = -Math.PI / 2;

        // Calculate the point cloud bounds
        pointCloud.geometry.computeBoundingBox();

        const boundingBox = pointCloud.geometry.boundingBox;

        if (boundingBox) {
          const center = new THREE.Vector3();
          boundingBox.getCenter(center);

          // Center the point cloud
          pointCloud.position.sub(center);

          const size = new THREE.Vector3();
          boundingBox.getSize(size);

          const maxSize = Math.max(size.x, size.y, size.z);

          if (maxSize > 0) {
            // Position camera based on map size
            camera.position.set(
              maxSize * 0.8,
              maxSize * 0.7,
              maxSize * 1.5
            );

            camera.up.set(0, 1, 0);
            camera.lookAt(0, 0, 0);

            camera.near = Math.max(maxSize / 1000, 0.01);
            camera.far = Math.max(maxSize * 10, 100);
            camera.updateProjectionMatrix();

            controls.target.set(0, 0, 0);
            controls.update();
          }
        }

        scene.add(pointCloud);

        console.log("PCD loaded successfully!");
        console.log(
          "Number of points:",
          pointCloud.geometry.attributes.position.count
        );
      },
      undefined,
      (error) => {
        console.error("Failed to load PCD map:", error);
      }
    );

    // Render the scene
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Clean up resources
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);

      controls.dispose();

      scene.traverse((object) => {
        if (object.isPoints) {
          object.geometry.dispose();

          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      grid.geometry.dispose();

      if (Array.isArray(grid.material)) {
        grid.material.forEach((material) => material.dispose());
      } else {
        grid.material.dispose();
      }

      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full min-h-[400px] w-full"
    />
  );
};

export default PointCloud;
