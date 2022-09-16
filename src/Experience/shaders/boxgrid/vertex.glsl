uniform float uTime;

varying vec3 pos;
varying vec2 vUv;

void main() {
  pos = position;
  vec3 p = position;
  // p.z = sin(p.x * 1. - uTime) * cos(p.y * 0.1 - uTime) * 1.;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);

  vUv = uv;
}