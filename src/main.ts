import * as THREE from 'three';
import { Color } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const 씬 = new THREE.Scene();
씬.background = new Color(0xffffff);
const 카메라맨 = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);
카메라맨.position.set(0, 150, -255);
카메라맨.lookAt(0, 2000, 0);

const 빚2 = new THREE.AmbientLight(0xffffff, 1);
씬.add(빚2);

var 렌더러 = new THREE.WebGLRenderer({ antialias: true });
렌더러.setSize(window.innerWidth, window.innerHeight);
document.getElementById('app')?.appendChild(렌더러.domElement);

new OrbitControls(카메라맨, 렌더러.domElement);

// @ts-ignore
var 고앵이멕스웨씨;

var 사이즈_다시_설정_해주는_사스게이 = () => {
  카메라맨.aspect = window.innerWidth/window.innerHeight
  카메라맨.updateProjectionMatrix();
  렌더러.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', 사이즈_다시_설정_해주는_사스게이);

new GLTFLoader().load( '/dingus_the_cat_big.glb', function ( gltf ) {
  고앵이멕스웨씨 = gltf.scene;
  고앵이멕스웨씨!.position.set(0, 0, 0);
  고앵이멕스웨씨?.rotateY(Math.PI / 2 - 92.95);
	씬.add( 고앵이멕스웨씨! );
  로동하는_함수();
  console.log(씬);

  function 로동하는_함수() {
    requestAnimationFrame(로동하는_함수);
    카메라맨.lookAt(0, 50, 0);
    // @ts-ignore
    고앵이멕스웨씨?.rotateY(-0.0187);
    렌더러.render(씬, 카메라맨);
  }
}, undefined, function ( 에러났니 ) {

	console.error( 에러났니 );
} );

/* 
음 ~맛있다 





*/