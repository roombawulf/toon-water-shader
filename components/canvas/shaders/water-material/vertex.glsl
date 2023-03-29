varying vec4 v_position;
varying vec4 v_viewPosition;
varying vec4 v_worldPosition;

uniform float u_time;

void main() {

    vec3 pos = position;
    pos.z = 0.01 * sin(15.0 * pos.x + u_time);


    v_position = vec4(position, 1.0);
    vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
    v_worldPosition = worldPosition;

    vec4 viewPosition = viewMatrix * worldPosition;
    v_viewPosition = viewPosition;

    gl_Position = projectionMatrix * viewPosition;
}