import * as THREE from "three";
import Experience from "../Experience.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default class Models {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setModel();
  }

  setModel() {
    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.MeshStandardMaterial()
    );
    this.cube.castShadow = true;
    this.cube.position.y = 1;

    // this.scene.add(this.cube);
    gsap.registerPlugin(ScrollTrigger);

    this.model = {};
    this.model.geometry = this.resources.items.spidermanMask.scene;

    this.baseColor = this.resources.items.spidermanMaskBaseColor;
    this.roughness = this.resources.items.spidermanMaskRoughness;
    this.mentalness = this.resources.items.spidermanMaskMetal;
    this.normal = this.resources.items.spidermanMaskNormal;
    this.height = this.resources.items.spidermanMaskHeight;

    this.baseColor.flipY = false;
    this.mentalness.flipY = false;
    this.roughness.flipY = false;
    this.normal.flipY = false;
    this.height.flipY = false;

    this.material = new THREE.MeshStandardMaterial({
      map: this.baseColor,
      metalnessMap: this.mentalness,
      roughnessMap: this.roughness,
      normalMap: this.normal,
      // displacementMap: this.height,
      // displacementScale: 0.01,
    });

    // console.log(this.textures);

    this.model.geometry.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = this.material;

        child.scale.set(2, 2, 2);
        child.position.y = 1;

        this.scene.add(child);

        gsap.to(child.rotation, {
          scrollTrigger: {
            trigger: this.canvas,
            start: "top top",
            end: "bottom top",
            scrub: true,
            toggleActions: "restart pause resume pause",
          },
          y: Math.PI * 2,
        });
      }
    });
  }
}
