import * as THREE from "three";
import Experience from "../Experience";
import backgroundVertex from "../shaders/background/vertex.glsl";
import backgroundFragment from "../shaders/background/fragment.glsl";

export default class Background {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setBackground();
  }

  setBackground() {
    console.log("hi");
    this.sphere = new THREE.SphereGeometry(50, 32, 16);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uResolution: {
          value: new THREE.Vector3(),
        },
        uTime: {
          value: 0,
        },
      },
      vertexShader: backgroundVertex,
      fragmentShader: backgroundFragment,
      side: THREE.DoubleSide,
    });

    this.background = new THREE.Mesh(this.sphere, this.material);

    this.scene.add(this.background);
  }
}
