uniform vec3 uResolution;
uniform float uTime;

varying vec2 vUv;
varying vec3 vPosition;

void main() {

  float strength = mod(vUv.y * 0.85, 1.) * 1.;

  vec3 blue = vec3(0.325, 0.35, 0.4) ;

  vec3 white = vec3(1.0, 1.0, 1.0);

  vec3 mixColor = mix(blue , white, strength);
  // vec3 mixColor = mix(white, blue, strength) / 1.;

  // gl_FragColor = vec4(vec3(strength), 1.);
  gl_FragColor = vec4(vec3(mixColor), 1.);
}