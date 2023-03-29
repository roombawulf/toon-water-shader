uniform vec2 u_res;
uniform sampler2D u_texture;

varying vec2 v_uv;
varying vec3 v_worldPos;
varying vec3 v_viewPos;
varying vec3 v_normal;

struct Geometry {
	vec3 pos;
	vec3 posWorld;
	vec3 viewDir;
	vec3 viewDirWorld;
	vec3 normal;
	vec3 normalWorld;
};

float random(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {

    // Geometry 
    float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

    Geometry geo;
	geo.pos = -v_viewPos;
	geo.posWorld = v_worldPos;
	geo.viewDir = normalize( v_viewPos );
	geo.viewDirWorld = normalize( geo.posWorld - cameraPosition );
	geo.normal = normalize( v_normal ) * faceDirection;
    
    geo.normalWorld = normalize( ( vec4( geo.normal, 0.0 ) * viewMatrix ).xyz );

    // Refract
    vec3 refractCol = vec3( 0.0 );
	vec2 screenUv = gl_FragCoord.xy / u_res.xy;
	vec2 refractUv = screenUv;
	float slide;
	vec2 refractUvR;
	vec2 refractUvG;
	vec2 refractUvB;
	float refractPower = 0.05;
	vec2 refractNormal =  geo.normal.xy * ( 1.0 - geo.normal.z * 0.7 );

    #pragma unroll_loop_start
	for ( int i = 0; i < 16; i ++ ) {
		
		slide = float( UNROLLED_LOOP_INDEX ) / 16.0 * 0.03; // + random( screenUv ) * 0.007;

		refractUvR = refractUv - refractNormal * ( refractPower + slide * 1.0 );
		refractUvG = refractUv - refractNormal * ( refractPower + slide * 2.0 );
		refractUvB = refractUv - refractNormal * ( refractPower + slide * 3.0 );

		refractCol.x += texture2D( u_texture, refractUvR ).x;
		refractCol.y += texture2D( u_texture, refractUvG ).y;
		refractCol.z += texture2D( u_texture, refractUvB ).z;

	}
	#pragma unroll_loop_end
	refractCol /= float( 16 );

    gl_FragColor = vec4(refractCol, 1.0);
}