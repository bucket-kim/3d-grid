import * as THREE from "three";
import Experience from "../Experience";
import boxVertex from "../shaders/boxgrid/vertex.glsl";
import boxFragment from "../shaders/boxgrid/fragment.glsl";

export default class Gridbox {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.time = this.experience.time;

    this.setBox();
  }

  setBox() {
    // front face plane
    this.plane = {};
    this.plane.geometry = new THREE.PlaneGeometry(10, 10);
    this.plane.material = new THREE.ShaderMaterial({
      uniforms: {
        uLineX: {
          value: 10,
        },
        uLineY: {
          value: 10,
        },
        uThickness: {
          value: 0.04,
        },
      },
      vertexShader: boxVertex,
      fragmentShader: boxFragment,
    });

    this.plane.mesh = new THREE.Mesh(this.plane.geometry, this.plane.material);
    this.plane.mesh.position.z = -75;

    this.plane = this.scene.add(this.plane.mesh);

    // planes around
    this.plane001 = {};
    this.plane002 = {};
    this.plane003 = {};
    this.plane004 = {};

    this.plane001.geometry = new THREE.PlaneGeometry(100, 10);
    this.plane001.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: {
          value: 0,
        },
        uLineX: {
          value: 50,
        },
        uLineY: {
          value: 10,
        },
        uThickness: {
          value: 0.04,
        },
      },
      vertexShader: boxVertex,
      fragmentShader: boxFragment,
      side: THREE.DoubleSide,
    });
    this.plane001.mesh = new THREE.Mesh(
      this.plane001.geometry,
      this.plane001.material
    );
    this.plane001.mesh.rotation.y = Math.PI * 0.5;
    this.plane001.mesh.position.x = -5;
    this.plane001.mesh.position.z = -25;

    this.plane002.mesh = new THREE.Mesh(
      this.plane001.geometry,
      this.plane001.material
    );
    this.plane002.mesh.rotation.y = Math.PI * 0.5;
    this.plane002.mesh.position.x = 5;
    this.plane002.mesh.position.z = -25;

    this.plane003.mesh = new THREE.Mesh(
      this.plane001.geometry,
      this.plane001.material
    );
    this.plane003.mesh.rotation.x = Math.PI * 0.5;
    this.plane003.mesh.rotation.z = -Math.PI * 0.5;
    this.plane003.mesh.position.y = -5;
    this.plane003.mesh.position.z = -25;

    this.plane004.mesh = new THREE.Mesh(
      this.plane001.geometry,
      this.plane001.material
    );
    this.plane004.mesh.rotation.x = Math.PI * 0.5;
    this.plane004.mesh.rotation.z = -Math.PI * 0.5;
    this.plane004.mesh.position.y = 5;
    this.plane004.mesh.position.z = -25;

    this.scene.add(this.plane001.mesh);
    this.scene.add(this.plane002.mesh);
    this.scene.add(this.plane003.mesh);
    this.scene.add(this.plane004.mesh);
  }

  update() {
    this.plane001.material.uniforms.uTime.value = this.time.elapsed * 0.0001;
    // console.log(this.time.elapsed * 0.001);
  }
}
