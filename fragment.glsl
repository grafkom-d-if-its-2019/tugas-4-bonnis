precision mediump float;

varying vec3 fNormal;
varying vec3 fColor;
varying vec3 fPosition;
varying vec2 fTexCoord;

uniform vec3 diffuseColor;
uniform vec3 diffusePosition; // Titik sumber cahaya
uniform vec3 ambientColor;

uniform sampler2D sampler0;

void main() {

  
  vec3 diffuseDirection = normalize(diffusePosition - fPosition);
 
  float normalDotLight = max(dot(fNormal, diffuseDirection), 0.0);

  float specularPower = 120.0;
  float specular = 0.0;

  if (normalDotLight > 0.0) {
    // viewing vector
    vec3 viewVec = vec3(0,0,1.0);

    // reflective vector
    vec3 reflectVec = reflect(-diffuseDirection, fNormal);

    // determine the specularFactor based on the dot product of viewing and reflective,
    // taking at least a minimum of 0.0
    float specularFactor = max(dot(reflectVec, viewVec), 0.0);
    specular = pow(specularFactor, specularPower);
  }

  vec4 textureColor = texture2D(sampler0, fTexCoord);

  vec3 diffuse = diffuseColor * textureColor.rgb * normalDotLight;
  vec3 ambient = ambientColor * textureColor.rgb;

  gl_FragColor = vec4(diffuse + ambient + fColor + specular, 1.0);
}
