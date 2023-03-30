uniform sampler2D u_depthTexture; // The WebGL depth texture
uniform vec2 u_winRes; // Viewport resolution
uniform float u_near;
uniform float u_far;

varying vec4 v_position; // The view position of the fragment
varying vec4 v_viewPosition; // The view position of the fragment
varying vec4 v_worldPosition; // The world position of the fragment


float linearizeDepth(float d, float near, float far) {
    return far * near / ((near-far) * d + far);
}

vec3 colorizeWater(vec3 col1, vec3 col2, float d) {
    return mix(col1, col2, d);
}

void main() {

    vec3 worldPosition = v_worldPosition.xyz;
    vec3 worldViewDirection = worldPosition.xyz - cameraPosition;
    vec2 screenSpace = gl_FragCoord.xy / u_winRes.xy;

    vec3 deepWaterColor = vec3(0.36, 0.46, 1.00);
    vec3 shallowWaterColor = vec3(0.70, 0.83, 1.00);
    vec3 finalCol;

    float sceneDepth = texture2D(u_depthTexture, screenSpace).r;
    float eyeDepth = linearizeDepth(sceneDepth, u_near, u_far);
    float distToWater = gl_FragCoord.z / gl_FragCoord.w;
    // float waterDepth = 1.0 - depthControl((eyeDepth - distToWater));

    // World-space water depth
    vec3 wDirDivide = worldViewDirection / distToWater;
    vec3 wDirMultiply = wDirDivide * eyeDepth;
    vec3 wDirAdd = wDirMultiply + cameraPosition;
    vec3 wDirSubtract = worldPosition - wDirAdd;

    float constWaterDepth = clamp(1.0 - wDirSubtract.g, 0.0, 1.0);
    constWaterDepth = pow(constWaterDepth, 4.0);

    finalCol = colorizeWater(deepWaterColor, shallowWaterColor, constWaterDepth);
    gl_FragColor = vec4(finalCol, 1.0);
}