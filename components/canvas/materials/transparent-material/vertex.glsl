varying vec2 v_uv;
varying vec3 v_worldPos;
varying vec3 v_viewPos;
varying vec3 v_normal;

void main() {

    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vec4 mvPosition = viewMatrix * worldPos;
    gl_Position = projectionMatrix * mvPosition;

    vec3 transformedNormal = normalMatrix * normal;
    vec3 normal = normalize(transformedNormal);

    v_uv = uv;
    v_normal = normal;
    v_viewPos = -mvPosition.xyz;
    v_worldPos = worldPos.xyz;

}