import Experience from "../Experience";
import * as THREE from "three";

export default class ShadowPlane {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.castShadow();
  }

  castShadow() {
    this.plane = new THREE.PlaneGeometry(10, 10, 50, 50);

    this.plane.rotateX(-Math.PI / 2);

    this.shadowMat = new THREE.ShadowMaterial();
    this.shadowMat.opacity = 0.2;
    this.shadowMat.side = THREE.DoubleSide;

    this.mesh = new THREE.Mesh(this.plane, this.shadowMat);
    this.mesh.position.y = -2.1;

    this.mesh.receiveShadow = true;

    this.scene.add(this.mesh);
  }
}
