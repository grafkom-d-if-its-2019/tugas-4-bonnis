precision mediump float;

varying vec3 fColor;

void main() {
  // gl_FragColor = vec4(0.3216, 0.8549, 0.8549, 1.0);
  gl_FragColor = vec4(fColor,1.0);
}
