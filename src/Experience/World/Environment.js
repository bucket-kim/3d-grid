import * as THREE from "three";
import Experience from "../Experience";
export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;

    // debug
    // if (this.debug.active) {
    //   this.debugFolder = this.debug.ui.addFolder("environment");
    // }

    this.setSunLight();
    this.setEnvMap();
    this.setAreaLight();
  }

  setSunLight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 4);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far = 15;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(4, 11, 1.35);

    this.helper = new THREE.DirectionalLightHelper(this.sunLight, 5);
    // this.scene.add(this.helper);

    this.scene.add(this.sunLight);

    // if (this.debug.active) {
    //   this.debugFolder
    //     .add(this.sunLight, "intensity")
    //     .name("sunLightIntensity")
    //     .min(0)
    //     .max(10)
    //     .step(0.001);

    //   this.debugFolder
    //     .add(this.sunLight.position, "x")
    //     .name("sunLightX")
    //     .min(-20)
    //     .max(20)
    //     .step(0.001);

    //   this.debugFolder
    //     .add(this.sunLight.position, "y")
    //     .name("sunLightY")
    //     .min(-20)
    //     .max(20)
    //     .step(0.001);

    //   this.debugFolder
    //     .add(this.sunLight.position, "z")
    //     .name("sunLightZ")
    //     .min(-20)
    //     .max(20)
    //     .step(0.001);

    //   this.debugFolder
    //     .add(this.sunLight.shadow, "radius")
    //     .min(0)
    //     .max(1000)
    //     .step(0.001);
    // }
  }

  setEnvMap() {
    this.environmentMap = {};
    this.environmentMap.intensity = 1;
    this.environmentMap.texture = this.resources.items.environmentMapTexture;
    this.environmentMap.texture.encoding = THREE.sRGBEncoding;

    this.scene.environment = this.environmentMap.texture;
    // this.scene.background = this.environmentMap.texture;

    this.environmentMap.updateMaterial = () => {
      this.scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.material.envMap = this.environmentMap.texture;
          child.material.envMapIntensity = this.environmentMap.intensity;
          child.material.needsUpdate = true;
        }
      });
    };

    this.environmentMap.updateMaterial();

    // debug
    // if (this.debug.active) {
    //   this.debugFolder
    //     .add(this.environmentMap, "intensity")
    //     .name("envMapIntensity")
    //     .min(0)
    //     .max(4)
    //     .step(0.001)
    //     .onChange(this.environmentMap.updateMaterial);
    // }
  }

  setAreaLight() {
    this.areaLight = new THREE.RectAreaLight(0xffffff, 0.35, 10, 10);
    this.areaLight.rotation.x = Math.PI / 2;
    this.areaLight.position.y = -3;

    this.scene.add(this.areaLight);

    // if (this.debug.active) {
    //   this.debugFolder
    //     .add(this.areaLight.position, "y")
    //     .name("areaLight Y")
    //     .min(-4)
    //     .max(4)
    //     .step(0.001);

    //   this.debugFolder
    //     .add(this.areaLight, "intensity")
    //     .name("areaLight intensity")
    //     .min(0)
    //     .max(1)
    //     .step(0.001);
    // }
  }
}
