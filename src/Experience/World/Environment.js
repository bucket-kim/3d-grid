import * as THREE from "three";
import Experience from "../Experience";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;

    // debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("environment");
    }

    this.setEnvMap();
    this.productLighting();
    // this.setSculptureLight();
  }

  setEnvMap() {
    this.environmentMap = {};
    this.environmentMap.texture = this.resources.items.museumEnvTexture;
    this.environmentMap.texture.encoding = THREE.sRGBEncoding;
    this.environmentMap.intensity = 1.5;

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
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    };

    this.environmentMap.updateMaterial();

    // debug
    if (this.debug.active) {
      this.debugFolder
        .add(this.environmentMap, "intensity")
        .name("envMapIntensity")
        .min(0)
        .max(5)
        .step(0.001)
        .onChange(this.environmentMap.updateMaterial);
    }
  }

  setSculptureLight() {
    this.areaLight = new THREE.RectAreaLight(0xffffff, 5, 5, 5);

    this.helper = new RectAreaLightHelper(this.areaLight);

    // this.scene.add(this.helper);
    this.areaLight.rotation.y = Math.PI;
    this.areaLight.rotation.x = Math.PI * 0.25;

    this.areaLight.position.set(0, 6, -3.5);

    if (this.debug.active) {
      this.debugFolder
        .add(this.areaLight, "intensity")
        .min(0)
        .max(10)
        .step(0.001);
      this.debugFolder
        .add(this.areaLight.position, "x")
        .min(-10)
        .max(10)
        .step(0.001);
      this.debugFolder
        .add(this.areaLight.position, "y")
        .min(-10)
        .max(10)
        .step(0.001);
      this.debugFolder
        .add(this.areaLight.position, "z")
        .min(-20)
        .max(10)
        .step(0.001);
    }

    this.scene.add(this.areaLight);

    this.spotLight = new THREE.SpotLight(
      0xfffffff,
      20,
      35,
      Math.PI * 0.1,
      0.5,
      1
    );

    this.spotLight.position.set(0, 6, 3);
    this.spotLight.shadow.mapSize.width = 1024;
    this.spotLight.shadow.mapSize.height = 1024;

    this.spotLight.castShadow = true;

    this.helper = new THREE.SpotLightHelper(this.spotLight);

    this.scene.add(this.spotLight.target);
    // this.scene.add(this.helper);
    this.scene.add(this.spotLight);

    if (this.debug.active) {
      this.debugFolder
        .add(this.spotLight.position, "y")
        .name("spot light y")
        .min(0)
        .max(50)
        .step(0.001);
      this.debugFolder
        .add(this.spotLight.position, "x")
        .name("spot light x")
        .min(-10)
        .max(10)
        .step(0.001);

      this.debugFolder
        .add(this.spotLight.position, "z")
        .name("spot light z")
        .min(-10)
        .max(10)
        .step(0.001);

      this.debugFolder
        .add(this.spotLight, "intensity")
        .name("spot light intensity")
        .min(0)
        .max(50)
        .step(0.001);
    }
  }

  productLighting() {
    this.spotLight = new THREE.SpotLight(
      0xfffffff,
      25,
      35,
      Math.PI * 0.1,
      0.5,
      1
    );

    this.spotLight.position.set(0, 6, 0);
    this.spotLight.shadow.mapSize.width = 2048;
    this.spotLight.shadow.mapSize.height = 2048;

    this.spotLight.castShadow = true;

    this.helper = new THREE.SpotLightHelper(this.spotLight);

    // this.scene.add(this.spotLight);
    this.scene.add(this.spotLight.target);
    // this.scene.add(this.helper);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.normalBias = 0.05;

    this.directionalLight.position.set(0, 15, -4);

    this.scene.add(this.directionalLight);

    if (this.debug.active) {
      this.debugFolder
        .add(this.directionalLight.position, "y")
        .name("spot light y")
        .min(0)
        .max(50)
        .step(0.001);
      this.debugFolder
        .add(this.directionalLight.position, "x")
        .name("spot light x")
        .min(-10)
        .max(10)
        .step(0.001);

      this.debugFolder
        .add(this.directionalLight.position, "z")
        .name("spot light z")
        .min(-10)
        .max(10)
        .step(0.001);

      this.debugFolder
        .add(this.directionalLight, "intensity")
        .name("spot light intensity")
        .min(0)
        .max(50)
        .step(0.001);
    }

    this.areaLight = new THREE.RectAreaLight(0xffffff, 2, 20, 20);

    this.helper = new RectAreaLightHelper(this.areaLight);

    // this.scene.add(this.helper);
    this.areaLight.rotation.x = -Math.PI * 0.5;
    this.areaLight.position.y = 9.5;

    this.scene.add(this.areaLight);

    if (this.debug.active) {
      this.debugFolder
        .add(this.areaLight, "intensity")
        .min(0)
        .max(5)
        .step(0.001);
      this.debugFolder
        .add(this.areaLight.position, "y")
        .min(-10)
        .max(20)
        .step(0.001);
    }
  }
}
