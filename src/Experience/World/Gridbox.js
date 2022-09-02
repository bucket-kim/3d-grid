import * as THREE from "three";
import Experience from "../Experience";
import boxVertex from "../shaders/boxgrid/vertex.glsl";
import boxFragment from "../shaders/boxgrid/fragment.glsl";

export default class Gridbox {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setBox();
  }

  setBox() {
    this.box = {};
    this.box.geometry = new THREE.BoxGeometry(5, 5, 5);

    this.box.material = new THREE.ShaderMaterial({
      vertexShader: boxVertex,
    });

    console.log(this.box.material);

    this.box.mesh = new THREE.Mesh(this.box.geometry, this.box.material);

    this.scene.add(this.box.mesh);
  }
}
