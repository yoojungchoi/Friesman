// vertices of a unit cube with origin at (0,0,0)
var cubeVertices = [
    vec4( -0.5, -0.5,  0.5, 1.0 ),
    vec4( -0.5,  0.5,  0.5, 1.0 ),
    vec4( 0.5,  0.5,  0.5, 1.0 ),
    vec4( 0.5, -0.5,  0.5, 1.0 ),
    vec4( -0.5, -0.5, -0.5, 1.0 ),
    vec4( -0.5,  0.5, -0.5, 1.0 ),
    vec4( 0.5,  0.5, -0.5, 1.0 ),
    vec4( 0.5, -0.5, -0.5, 1.0 )
];

var texCoord = [
    vec4(0, 0, 0.0, 1.0),
    vec4(0, 1, 0.0, 1.0),
    vec4(1, 1, 0.0, 1.0),
    vec4(1, 0, 0.0, 1.0)
];

// push points and texture coordinates for a quadrilateral
function quad(a, b, c, d) {
    points.push(cubeVertices[a]);
    normals.push(normalize(cubeVertices[a].slice(), true));
    texCoords.push(texCoord[1]);

    points.push(cubeVertices[b]); 
    normals.push(normalize(cubeVertices[b].slice(), true));
    texCoords.push(texCoord[2]); 

    points.push(cubeVertices[c]); 
    normals.push(normalize(cubeVertices[c].slice(), true));
    texCoords.push(texCoord[3]); 
   
    points.push(cubeVertices[a]); 
    normals.push(normalize(cubeVertices[a].slice(), true));
    texCoords.push(texCoord[1]); 

    points.push(cubeVertices[c]); 
    normals.push(normalize(cubeVertices[c].slice(), true));
    texCoords.push(texCoord[3]); 

    points.push(cubeVertices[d]); 
    normals.push(normalize(cubeVertices[d].slice(), true));
    texCoords.push(texCoord[0]);   
}

// push points and texture coordinates for a cube
function cube(){
    quad(1, 2, 3, 0);
    quad(3, 2, 6, 7);
    quad(3, 0, 4, 7);
    quad(6, 5, 1, 2);
    quad(4, 5, 6, 7);
    quad(5, 4, 0, 1);
}