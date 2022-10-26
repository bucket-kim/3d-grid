import Experience from "../Experience";
import * as THREE from "three";

export default class ShadowPlane {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.debug = this.experience.debug;

    // debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("shadow");
      this.debugFolder.closed = false;
    }

    this.castShadow();
  }

  castShadow() {
    this.plane = new THREE.PlaneGeometry(50, 50, 100, 100);

    this.plane.rotateX(-Math.PI / 2);

    this.shadowMat = new THREE.ShadowMaterial();
    this.shadowMat.opacity = 0.15;
    this.shadowMat.side = THREE.DoubleSide;
    // this.shadowMat.vi

    this.mesh = new THREE.Mesh(this.plane, this.shadowMat);
    this.mesh.position.y = -1.0;

    this.mesh.receiveShadow = true;

    this.scene.add(this.mesh);

    if (this.debug.active) {
      this.debugFolder.add(this.shadowMat, "visible");
    }
  }
}
