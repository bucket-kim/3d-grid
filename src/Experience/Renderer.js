import * as THREE from "three";
import Experience from "./Experience.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";

export default class Renderer {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.instance.physicallyCorrectLights = true;
    this.instance.outputEncoding = THREE.sRGBEncoding;
    this.instance.toneMapping = THREE.ACESFilmicToneMapping;
    this.instance.toneMappingExposure = 1;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.instance.setClearColor("#2b272d");
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);

    this.pixelRatio = this.instance.getPixelRatio();

    this.compser = new EffectComposer(this.instance);
    this.fxaaPass = new ShaderPass(FXAAShader);
    this.fxaaPass.material.uniforms["resolution"].value.x =
      1 / (this.canvas.offsetWidth * this.pixelRatio);
    this.fxaaPass.material.uniforms["resolution"].value.y =
      1 / (this.canvas.offsetHeight * this.pixelRatio);

    this.compser.addPass(this.fxaaPass);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);

    this.fxaaPass.material.uniforms["resolution"].value.x =
      1 / (this.canvas.offsetWidth * this.pixelRatio);
    this.fxaaPass.material.uniforms["resolution"].value.y =
      1 / (this.canvas.offsetHeight * this.pixelRatio);
  }

  update() {
    this.instance.render(this.scene, this.camera.instance);
  }
}
