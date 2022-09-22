import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Experience from "./Experience.js";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.debug = this.experience.debug;

    this.setInstance();
    this.setOrbitControl();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      10000
    );
    this.mouse = new THREE.Vector2();
    this.target = new THREE.Vector2();
    this.windowHalf = new THREE.Vector2(
      this.sizes.width / 2,
      this.sizes.height / 2
    );

    this.instance.position.set(0, 2.5, 10);

    // this.instance.enablepan = false;

    // document.addEventListener(
    //   "wheel",
    //   (e) => {
    //     this.instance.position.z += e.deltaY * 0.05;
    //   },
    //   false
    // );

    // this.scene.add(this.instance);
  }

  setOrbitControl() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
    // this.controls.minPolarAngle = 0;
    // this.controls.maxPolarAngle = Math.PI * 0.5;

    this.controls.minDistance = 5;
    this.controls.maxDistance = 15;

    const minPan = new THREE.Vector3(-3, -1, -2);
    const maxPan = new THREE.Vector3(3, 1, 2);
    const _v = new THREE.Vector3();

    // this.controls.addEventListener("change", () => {
    //   _v.copy(this.controls.target);
    //   this.controls.target.clamp(minPan, maxPan);

    //   _v.sub(this.controls.target);
    //   this.instance.position.sub(_v);
    // });
  }

  resize() {
    this.windowHalf.set(this.sizes.width / 2, this.sizes.height / 2);

    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
    // this.target.x = (1 - this.mouse.x) * 0.002;
    // this.target.y = (1 - this.mouse.y) * 0.002;

    // this.instance.rotation.x +=
    //   0.05 * (this.target.y - this.instance.rotation.x);
    // this.instance.rotation.y +=
    //   0.05 * (this.target.x - this.instance.rotation.y);
  }
}
