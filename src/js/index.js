import * as THREE from 'three';
import 'core-js'; // IEで動作するようにポリフィルを導入
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const drawMagicCircle = () => {
  const $canvas = document.querySelector('.EX1'),
    width = $canvas.clientWidth,
    height = $canvas.clientHeight;

  if ($canvas.width !== width || $canvas.height !== height) {
    // サイズが違っていたら、描画バッファーのサイズを表示サイズと同じサイズに合わせる。
    $canvas.width = width;
    $canvas.height = height;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
  camera.position.z = 20;

  const renderer = new THREE.WebGLRenderer({
    canvas: $canvas,
  });

  const loader = new THREE.TextureLoader();

  const magicCircle = new THREE.Mesh(
    new THREE.CircleGeometry(8, 32),
    new THREE.MeshBasicMaterial({
      map: loader.load('./img/img_marchosias.png'),
      side: THREE.DoubleSide,
      transparent: true,
    })
  );
  magicCircle.rotation.x = -Math.PI / 2.5;
  scene.add(magicCircle);

  const light = new THREE.DirectionalLight(0xffffff);
  light.intensity = 1;
  light.position.set([1, 1, 1]);
  scene.add(light);

  //デバッグ用
  let controls = new OrbitControls(camera, $canvas);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;
  controls.update();

  renderer.setSize(width, height);
  renderer.setPixelRatio(devicePixelRatio);
  const tick = () => {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };
  tick();
};

const init = () => {
  drawMagicCircle();
};

onload = init;
