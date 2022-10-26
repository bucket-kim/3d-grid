import * as THREE from "three";
import Experience from "../Experience.js";
import Background from "./Background.js";
import Environment from "./Environment.js";
import Gridbox from "./Gridbox.js";
import Models from "./Models.js";
import ShadowPlane from "./ShadowPlane.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // test mesh
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial()
    );

    // this.scene.add(testMesh);

    this.resources.on("ready", () => {
      // setup
      this.environment = new Environment();
      // this.gridbox = new Gridbox();
      this.models = new Models();
      this.shadowPlane = new ShadowPlane();
      // this.background = new Background();
    });
  }

  update() {
    if (this.gridbox) {
      this.gridbox.update();
    }
  }
}
