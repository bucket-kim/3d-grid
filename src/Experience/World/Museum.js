import Experience from "../Experience";
import * as THREE from "three";

export default class Museum {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.source = this.experience.resources;

    this.setModel();
  }

  setModel() {
    this.model = {};

    this.model.geo = this.source.items.model.scene;
    // this.model.geo.position.y = -4;
    // this.model.geo.position.z = -10;
    this.model.geo.rotation.y = Math.PI * 0.5;

    this.model.texture = this.source.items.modelTexture;
    this.model.texture.encoding = THREE.sRGBEncoding;
    this.model.texture.flipY = false;

    this.model.material = new THREE.MeshBasicMaterial({
      map: this.model.texture,
    });

    this.model.geo.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = this.model.material;
        // console.log("hi");
      }
    });

    this.scene.add(this.model.geo);
  }
}
