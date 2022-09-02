varying vec2 vUv;

uniform float uLineX;
uniform float uLineY;
uniform float uThickness;
uniform float uTime;

void main() {
  float delta = 0.05 / 2.0;


  float x = fract((vUv.x + uTime) * uLineX);
  x = min(x, 1.0 - (x));

  float xdelta = fwidth(x);
  x = smoothstep(x - xdelta, x + xdelta, uThickness);

  float y = fract(vUv.y * uLineY);
  y = min(y, 1.0 - y );

  float ydelta = fwidth(y);
  y = smoothstep(y - ydelta, y + ydelta, uThickness);

  float c =clamp(x + y, 0.0, 1.0);

  gl_FragColor = vec4(c, c, c, 1.0);
}