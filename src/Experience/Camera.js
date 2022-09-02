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
      1000
    );

    this.instance.position.set(0, 0, 15);
    this.scene.add(this.instance);

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("camera");
      this.debugFolder.add(this.instance.position, "y", -10, 10, 0.01);
      this.debugFolder.add(this.instance.position, "x", -10, 10, 0.01);
      this.debugFolder.add(this.instance.position, "z", 0, 20, 0.01);
    }
  }

  setOrbitControl() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }
}
