import * as THREE from "three";
import Experience from "../Experience";

export default class Gridbox {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setBox();
  }

  setBox() {
    console.log("box");
  }
}
