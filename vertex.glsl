precision mediump float;

attribute vec3 vPosition;
attribute vec3 vColor;
varying vec3 fColor;
uniform float theta;
uniform float scaleX;
uniform float scaleY;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;


void main() {
  fColor = vColor;
  mat4 rotationMatrix = 
  mat4(
    cos(theta),sin(theta),0.0,0.0,
    -sin(theta),cos(theta),0.0,0.0,
    0.0,0.0,1.0,0.0,
    0.0,0.0,0.0,1.0
  );

  mat4 translationMatrix =mat4(
    1.0,0.0,0.0,0.0,
    0.0,1.0,0.0,0.0,
    0.0,0.0,1.0,0.0,
    0.0,0.0,0.0,1.0 //change this
  );

  // vec2 temp = vPosition;
  // temp = temp * transform;
  // gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(vPosition, 1.0);

  gl_PointSize = 10.0;
}
