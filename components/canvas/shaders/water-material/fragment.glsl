uniform sampler2D u_depthTexture; // The WebGL depth texture
uniform vec2 u_winRes; // Viewport resolution
uniform float u_near;
uniform float u_far;

varying vec4 v_position; // The view position of the fragment
varying vec4 v_viewPosition; // The view position of the fragment
varying vec4 v_worldPosition; // The world position of the fragment


float linearizeDepth(float d,float zNear,float zFar)
{
    return zNear * zFar / (zFar + d * (zNear - zFar));
}

void main() {

    vec2 screenSpace = gl_FragCoord.xy / u_winRes.xy;
    float sceneDepth = texture2D(u_depthTexture, screenSpace).r;
    sceneDepth = linearizeDepth(sceneDepth, u_near, u_far), 0.0, 1.0;

    float surfaceDepth = length(cameraPosition - v_worldPosition.xyz);

    float thing = clamp(1.0 - (sceneDepth - surfaceDepth), 0.0, 1.0);
    thing = pow(thing, 10.0);

    vec3 water = vec3(0.4, 0.6, 0.7);
    vec3 waterdeep = vec3(0.2, 0.4, 0.6);

    vec3 finalCol;
    finalCol = mix(waterdeep, water, thing);
    
    gl_FragColor = vec4(finalCol, 1.0);

}