import * as THREE from "three";
import Experience from "../Experience";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;

    // sculpture
    this.sculptureAreaLight = new THREE.RectAreaLight(0xffffff, 5, 5, 5);
    this.spotSculptureLight = new THREE.SpotLight(
      0xfffffff,
      20,
      35,
      Math.PI * 0.1,
      0.5,
      1
    );

    // product
    this.directionalProductLight = new THREE.DirectionalLight(0xffffff, 10);
    this.areaProductLight = new THREE.RectAreaLight(0xffffff, 2, 20, 20);

    this.setEnvMap();
    // this.productLighting();
    // this.setSculptureLight();
    this.lightSwitch();
  }

  setEnvMap() {
    this.environmentMap = {};
    this.environmentMap.texture = this.resources.items.museumEnvTexture;
    this.environmentMap.texture.encoding = THREE.sRGBEncoding;
    this.environmentMap.intensity = 1;

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
  }

  setSculptureLight() {
    this.helper = new RectAreaLightHelper(this.sculptureAreaLight);

    // this.scene.add(this.helper);
    this.sculptureAreaLight.rotation.y = Math.PI;
    this.sculptureAreaLight.rotation.x = Math.PI * 0.25;

    this.sculptureAreaLight.position.set(0, 6, -3.5);

    this.scene.add(this.sculptureAreaLight);

    this.spotSculptureLight.position.set(0, 6, 3);
    this.spotSculptureLight.shadow.mapSize.width = 1024;
    this.spotSculptureLight.shadow.mapSize.height = 1024;

    this.spotSculptureLight.castShadow = true;

    this.helper = new THREE.SpotLightHelper(this.spotSculptureLight);

    this.scene.add(this.spotSculptureLight.target);
    this.scene.add(this.spotSculptureLight);

    this.scene.remove(this.directionalProductLight);
    this.scene.remove(this.areaProductLight);
  }

  productLighting() {
    this.directionalProductLight.castShadow = true;
    this.directionalProductLight.shadow.normalBias = 0.05;

    this.directionalProductLight.position.set(0, 15, -4);

    this.scene.add(this.directionalProductLight);

    this.helper = new RectAreaLightHelper(this.areaProductLight);

    // this.scene.add(this.helper);
    this.areaProductLight.rotation.x = -Math.PI * 0.5;
    this.areaProductLight.position.y = 9.5;

    this.scene.add(this.areaProductLight);

    this.scene.remove(this.spotSculptureLight);
    this.scene.remove(this.sculptureAreaLight);
  }

  lightSwitch() {
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("Lighting Choice");
      this.debugFolder.closed = false;
    }

    this.params = {
      checkBox: true,
    };

    if (this.debugFolder) {
      this.debugFolder
        .add(this.params, "checkBox")
        .name("product / sculpture")
        .onChange((val) => {
          if (val === true) {
            this.productLighting();
          } else {
            this.setSculptureLight();
          }
        });
    }
  }
}
