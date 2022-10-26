import * as THREE from "three";
import Experience from "../Experience.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

export default class Models {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setModel();
  }

  setModel(name) {
    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.MeshStandardMaterial()
    );
    this.cube.castShadow = true;
    this.cube.position.y = 1;

    // this.scene.add(this.cube);

    this.model = {};
    // this.model.geometry = this.resources.items.sculpture.scene;
    this.model.geometry = this.resources.items.sculpture.scene;

    this.baseColor = this.resources.items.shoeColor;
    this.baseColor.encoding = THREE.sRGBEncoding;
    this.roughness = this.resources.items.coverMaskRoughness;
    this.metalness = this.resources.items.coverMaskMetalness;
    this.normal = this.resources.items.coverMaskNormal;
    this.height = this.resources.items.spidermanMaskHeight;

    this.baseColor.flipY = false;
    this.metalness.flipY = false;
    this.roughness.flipY = false;
    this.normal.flipY = false;
    this.height.flipY = false;

    this.roughness.wrapS = this.roughness.wrapT = THREE.RepeatWrapping;
    this.metalness.wrapS = this.metalness.wrapT = THREE.RepeatWrapping;
    this.normal.wrapS = this.normal.wrapT = THREE.RepeatWrapping;

    this.hdrEquirect = new RGBELoader().load(
      "textures/browPhotoStudio.hdr",
      () => {
        this.hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
      }
    );

    this.material = new THREE.MeshStandardMaterial({
      map: this.baseColor,
      metalnessMap: this.metalness,
      roughnessMap: this.roughness,
      normalMap: this.normal,
      color: "#eaeaea",
      // envMap: this.hdrEquirect,
      transparent: true,
    });

    // console.log(this.textures);

    this.model.geometry.traverse((child) => {
      let scale = 2;

      if (child instanceof THREE.Mesh) {
        // child.material = this.material;
        child.material = this.material;
        child.material.needsUpdate = true;

        child.scale.set(scale, scale, scale);
        child.position.y = -1;

        child.castShadow = true;
        // child.rotation.y = Math.PI / 2;

        this.scene.add(child);
      }
    });
  }
}
