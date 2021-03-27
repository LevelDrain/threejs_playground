import * as THREE from 'three';
import 'core-js'; // IEで動作するようにポリフィルを導入

window.addEventListener('DOMContentLoaded', () => {
  const $canvas = document.querySelector('#Canvas'),
    width = window.innerWidth,
    height = window.innerHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
  camera.position.z = 3;

  const renderer = new THREE.WebGLRenderer({
    canvas: $canvas,
  });

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshToonMaterial({
    color: 0xf066aa,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  const light = new THREE.DirectionalLight(0xffffff);
  light.intensity = 1;
  light.position.set(1, 1, 1);
  scene.add(light);

  renderer.setSize(width, height);
  renderer.setPixelRatio(devicePixelRatio);
  renderer.render(scene, camera);

  const tick = () => {
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };
  tick();
});
