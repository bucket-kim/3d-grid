import * as THREE from "three";
import Experience from "../Experience";
import boxVertex from "../shaders/boxgrid/vertex.glsl";
import boxFragment from "../shaders/boxgrid/fragment.glsl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default class Gridbox {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.canvas = this.experience.canvas;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.sources = this.experience.resources;

    this.color = new THREE.Vector3(0.28, 0.51, 0.93);

    this.setPlatform();
    this.setCube();
    this.setColorSwitch();
  }

  setPlatform() {
    this.platform = {};
    this.platform.geo = new THREE.PlaneGeometry(50, 50, 100, 100);

    this.platform.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: {
          value: 0,
        },
        uColor: {
          value: this.color,
        },
      },
      vertexShader: boxVertex,
      fragmentShader: boxFragment,
    });

    this.platform.mesh = new THREE.Mesh(
      this.platform.geo,
      this.platform.material
    );
    this.platform.mesh.position.z = -10;

    this.scene.add(this.platform.mesh);
  }

  setCube() {
    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.MeshStandardMaterial()
    );
    this.cube.castShadow = true;
    this.cube.position.y = 1;

    this.scene.add(this.cube);

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(this.cube.rotation, {
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

  setColorSwitch() {}

  update() {
    this.platform.material.uniforms.uTime.value = this.time.elapsed * 0.001;
  }
}
