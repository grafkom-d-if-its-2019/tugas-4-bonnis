(function() {


  glUtils.SL.init({ callback: function() { main(); }});
  function main() {
    var canvas = document.getElementById("glcanvas");
    var gl = glUtils.checkWebGL(canvas);
    var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex);
    var fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);
    var program = glUtils.createProgram(gl, vertexShader, fragmentShader);
    gl.useProgram(program);

    var cubeVertices = [];

    var cubePoints=[
      [-0.5, -0.5, 0.5],
      [-0.5, 0.5, 0.5],
      [0.5, 0.5, 0.5],
      [0.5,-0.5,0.5],
      [-0.5,-0.5,-0.5],
      [-0.5,0.5,-0.5],
      [0.5,0.5,-0.5],
      [0.5,-0.5,-0.5],
    ];

    var cubeColor=[
      [],
      [1.0, 1.0, 0.0],
      [0.5, 0.5, 0.0],
      [1.0, 1.0, 0.0],
      [0.5, 0.5, 0.0],
      [1.0, 1.0, 0.0],
      [0.5, 0.5, 0.0],
    ]

    function quad(a, b, c, d){
      var indices = [a, b, b, c, c, d, d, a];
      for(var i=0; i<indices.length; i++){
        for(var j=0; j<3; j++){
          cubeVertices.push(cubePoints[indices[i]][j]);
        }
        for(var j=0; j<3;j++){
          cubeVertices.push(cubeColor[a][j]);
        }
      }
    }

    quad(1,0,3,2)
    quad(2,3,7,6)
    quad(3,0,4,7)
    quad(4,5,6,7)
    quad(5,4,0,1)
    quad(6,5,1,2)

    function colorset()
    {
      color =[1.0,1.0,0.0]
      for(var i=0;i<letterFrontVertices.length;i++)
      {
        for(var j=1; j<=3; j++){
          letterFrontVertices[(i+1)*3+j]=color[j];
        }
      }
    }

var letterVertices = [];
var protoVertices = new Float32Array([
  0.25, 0.7, 
  0.25, -0.5,
  0.35, 0.7,

  0.25, -0.5,
  0.35, -0.5,//atas
  0.35, 0.7,
  
  0.25, -0.5,
  0.35, -0.5,//baeah
  0.25, -0.7,
  //bagian Kiri

  0.35, 0.5,
  0.35, 0.7,
  0.45, 0.7,

  0.35, 0.5,
  0.45, 0.7,//atas
  0.45, 0.5,

  0.35, 0.1,
  0.35, -0.1,
  0.45, 0.1,

  0.45,0.1,
  0.35,-0.1,//tengah
  0.45,-0.1,

  0.35,-0.1,
  0.45,-0.1, //bawah
  0.45,-0.3,
  //bagian tengah

  0.45,0.7,
  0.45,0.5,
  0.55,0.5,//segitiga atas

  0.45,0.5,
  0.55,0.5,
  0.45,0.1,

  0.45,0.1,
  0.55,0.5,//boks atas
  0.55,0.1,

  0.45,0.1,
  0.55,0.1,//segitiga tengah
  0.45,-0.1,

  0.45,-0.1,
  0.45,-0.3, //segitiga tengah-bawah
  0.55,-0.3,

  0.45,-0.3,
  0.45,-0.5,
  0.55,-0.3,

  0.45,-0.5,
  0.55,-0.3, //boks bawah
  0.55,-0.5,

 0.45,-0.5,
 0.55,-0.5, //segitiga bawah
 0.45,-0.7,

 //bagian kanan
]);

maskVertices = new Float32Array([
  0.25, 0.7, 0.1, //bright
  0.25, -0.7, 0.1, //bright
  0.25, -0.7, 0.0, //

  0.25, 0.7, 0.0, //bright
  0.25, 0.7, 0.1, //bright
  0.25, -0.7, 0.0, //

  0.25,0.7,0.1,
  0.45,0.7,0.1,
  0.45,0.7,0.0,

  0.25,0.7,0.0,
  0.25,0.7,0.1,
  0.45,0.7,0.0,

  0.45,0.7,0.1,
  0.45,0.7,0.0,
  0.55,0.5,0.1,

  0.45,0.7,0.0,
  0.55,0.5,0.1,
  0.55,0.5,0.0,

  0.55,0.5,0.1,
  0.55,0.5,0.0,
  0.55,0.1,0.1,

  0.55,0.5,0.0,
  0.55,0.1,0.1,
  0.55,0.1,0.0,

  0.55,0.1,0.1,
  0.55,0.1,0.0,
  0.45,-0.1,0.0,

  0.55,0.1,0.1,
  0.45,-0.1,0.0,
  0.45,-0.1,0.1,

  0.45,-0.1,0.0,
  0.45,-0.1,0.1,
  0.55,-0.3,0.1,

  0.45,-0.1,0.0,
  0.55,-0.3,0.1,
  0.55,-0.3,0.0,

  0.55,-0.3,0.1,
  0.55,-0.3,0.0,
  0.55,-0.5,0.1,

  0.55,-0.3,0.0,
  0.55,-0.5,0.1,
  0.55,-0.5,0.0,

  0.55,-0.5,0.1,
  0.55,-0.5,0.0,
  0.45,-0.7,0.1,

  0.55,-0.5,0.0,
  0.45,-0.7,0.1,
  0.45,-0.7,0.0,

  0.45,-0.3,0.1,
  0.45,-0.3,0.0,
  0.45,-0.7,0.1,

  0.45,-0.3,0.0,
  0.45,-0.7,0.1,
  0.45,-0.7,0.0,

  0.45,-0.3,0.1,
  0.45,-0.3,0.0,
  0.35,-0.1,0.1,

  0.45,-0.3,0.0,
  0.35,-0.1,0.1,
  0.35,-0.1,0.0,

  0.35,-0.1,0.1,
  0.35,-0.1,0.0,
  0.35,-0.5,0.0,

  0.35,-0.5,0.1,
  0.35,-0.1,0.1,
  0.35,-0.5,0.0,

  0.35,-0.5,0.1,
  0.35,-0.5,0.0,
  0.25,-0.7,0.0,

  0.25,-0.7,0.0,
  0.25,-0.7,0.1,
  0.35,-0.5,0.1,

  0.35,0.5,0.1,
  0.35,0.5,0.0,
  0.35,0.1,0.1,

  0.35,0.5,0.0,
  0.35,0.1,0.1,
  0.35,0.1,0.0,

  0.35,0.1,0.1,
  0.35,0.1,0.0,
  0.45,0.1,0.1,

  0.35,0.1,0.0,
  0.45,0.1,0.1,
  0.45,0.1,0.0,

  0.45,0.5,0.1,
  0.45,0.5,0.0,
  0.45,0.1,0.1,

  0.45,0.5,0.0,
  0.45,0.1,0.1,
  0.45,0.1,0.0,

  0.35,0.5,0.1,
  0.35,0.5,0.0,
  0.45,0.5,0.1,

  0.35,0.5,0.0,
  0.45,0.5,0.1,
  0.45,0.5,0.0,

]);


var collisionPoints = [
  [0.25,0.7,0.1],
  [0.25,0.7,0.0],
  [0.25,-0.7,0.1],
  [0.25,-0.7,0.0],
  [0.55,0.7,0.1],
  [0.55,0.7,0.0],
  [0.55,-0.7,0.1],
  [0.55,-0.7,0.0],
]
var letterColor=[1.0,1.0,0.0];
var letterBackColor=[0.5,0.5,0.0];
var totalVertices = 0;
function makeLetterFace(){
  for(var i=0; i<protoVertices.length/2; i++){
    for(var j=0; j<2;j++){
      letterVertices.push(protoVertices[(i*2)+j]);
    }
    letterVertices.push(0.1);
    for(var j=0; j<3;j++){
      letterVertices.push(letterColor[j]);
    }
  }

  for(var i=0; i<protoVertices.length/2; i++){
    for(var j=0; j<2;j++){
      letterVertices.push(protoVertices[(i*2)+j]);
    }
    letterVertices.push(0.0);
    for(var j=0; j<3;j++){
      letterVertices.push(letterBackColor[j]);
    }
  }

  for(var i=0; i<maskVertices.length/3; i++){
    for(var j=0; j<3;j++){
      letterVertices.push(maskVertices[(i*3)+j]);
    }
    var side = maskVertices[(i*3)+2];
    for(var j=0; j<3;j++){
      if(side==0.0)
      letterVertices.push(letterBackColor[j]);
      else
      letterVertices.push(letterColor[j]);
    }
  }
  totalVertices = protoVertices.length*6 + maskVertices.length*2;
  console.log(letterVertices);
}
makeLetterFace()

  // letterVertices.push(letterBackVertices);
  var thetaUniformLocation = gl.getUniformLocation(program,'theta');
  var theta = 0;
  gl.uniform1f(thetaUniformLocation,theta);

  var scaleXUniformLocation = gl.getUniformLocation(program,'scaleX');
  var scaleYUniformLocation = gl.getUniformLocation(program,'scaleY');
  var flag = 1;


    function initCubeBuffers(nm){
      //VBO -> Vertex Buffer Object

      var vertexBufferObject = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeVertices), gl.STATIC_DRAW);
      
      var vPosition = gl.getAttribLocation(program, 'vPosition');
      var vColor = gl.getAttribLocation(program, 'vColor');
      gl.vertexAttribPointer(
        vPosition,  //Variabel yang memegang attribut posisi di shader
        3,          //jumlah elemen per atribut
        gl.FLOAT,   //tipe data atribut
        gl.FALSE,   // apa ini
        6 * Float32Array.BYTES_PER_ELEMENT, //ukurab byte tiap verteks
        0 //offset dari posisi elemen
      );
      gl.vertexAttribPointer(vColor, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
      gl.enableVertexAttribArray(vPosition);
      gl.enableVertexAttribArray(vColor);
    }

    function initLetterBuffers(nm){
      var vertexBufferObject = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(letterVertices), gl.STATIC_DRAW);
      
      var vPosition = gl.getAttribLocation(program, 'vPosition');
      var vColor = gl.getAttribLocation(program, 'vColor');
      gl.vertexAttribPointer(
        vPosition,  //Variabel yang memegang attribut posisi di shader
        3,          //jumlah elemen per atribut
        gl.FLOAT,   //tipe data atribut
        gl.FALSE,   // apa ini
        6 * Float32Array.BYTES_PER_ELEMENT, //ukurab byte tiap verteks
        0 //offset dari posisi elemen
      );
      gl.vertexAttribPointer(vColor, 3, gl.FLOAT, gl.FALSE, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
      gl.enableVertexAttribArray(vPosition);
      gl.enableVertexAttribArray(vColor);
    }

   
    var nmloc = gl.getUniformLocation(program,'modelMatrix');
    var thetaSpeed = 0;
    var axis=[false,false,false]
    var zoom=0.0;
    var xpos=0.0;
    function OnKeyDown(event){
      if(event.keyCode==189)thetaSpeed -= 0.01;
      else if(event.keyCode==187)thetaSpeed += 0.01;
      else if(event.keyCode==48)thetaSpeed = 0;
      else if (event.keyCode==88) axis[0] = !axis [0];
      else if (event.keyCode==89) axis[1] = !axis [1];
      else if (event.keyCode==90) axis[2] = !axis [2];
      else if (event.keyCode==38) zoom-=0.01;
      else if (event.keyCode==40) zoom+=0.01;
      else if (event.keyCode==37) xpos+=0.01;
      else if (event.keyCode==39) xpos-=0.01;
    }


    document.addEventListener('keydown', OnKeyDown)
    var nm =glMatrix.mat4.create();   
    var xOff = 0;
    var yOff = 0;
    var zOff = 0;
    var xSpeed=0.001;
    var ySpeed=-0.01;
    var zSpeed=0.01;
    var rotSpeed=0.01;
    var rot = 0;
    var vmLoc = gl.getUniformLocation(program, 'viewMatrix');
    var vm = glMatrix.mat4.create();
    var pmLoc = gl.getUniformLocation(program, 'projectionMatrix');
    var pm = glMatrix.mat4.create();
    

    glMatrix.mat4.perspective(pm,
      glMatrix.glMatrix.toRadian(90),//fovy dalam rad
      canvas.width/canvas.height,//aspect ratio
      0.1,//near
      10.0//far
    );
    gl.uniformMatrix4fv(pmLoc,false,pm);
    glMatrix.mat4.translate(nm,nm, [0.0,0.0,-2.0]);
    var currentCollPoints =[];
    var currentCubePoints =[];

    var planes = {
      front : null,
      back : null,
      top : null,
      bottom : null,
      right : null,
      left : null,
    }

    function calcDist(point, plane) {
      var v = glMatrix.vec3.create()
      var a = glMatrix.vec3.create()
      var b = glMatrix.vec3.create()
      var c = glMatrix.vec3.create()
      glMatrix.vec3.subtract(v, point, plane[0])
      glMatrix.vec3.subtract(a, plane[1], plane[0])
      glMatrix.vec3.subtract(b, plane[2], plane[1])
      glMatrix.vec3.cross(c, a, b)
      var lenC = glMatrix.vec3.len(c)
      glMatrix.vec3.divide(c, c, [lenC,lenC,lenC])
      return Math.abs(glMatrix.vec3.dot(v, c))
    }

    function CollisionCheck(){
      var min = 0.01
        for(var  i = 0; i < currentCollPoints.length; i++){
          if(calcDist(currentCollPoints[i],planes.front) < min){
            zSpeed*=-1
            rotSpeed*=-1
            console.log('front');
            return
          }
        }
        for(var  i = 0; i < currentCollPoints.length; i++){
          if(calcDist(currentCollPoints[i],planes.back) < min){
            zSpeed*=-1
            rotSpeed*=-1
            console.log('back');
            return
          }
        }
        for(var  i = 0; i < currentCollPoints.length; i++){
          if(calcDist(currentCollPoints[i],planes.top) < min){
            ySpeed*=-1
            console.log('top');
            return
          }
        }
        for(var  i = 0; i < currentCollPoints.length; i++){
          if(calcDist(currentCollPoints[i],planes.bottom) < min){
            ySpeed*=-1
            console.log('bottom');
            return
          }
        }
        for(var  i = 0; i < currentCollPoints.length; i++){
          if(calcDist(currentCollPoints[i],planes.left) < min){
            rotSpeed*=-1
            xSpeed*=-1
            console.log('left');
            return
          }
        }
        for(var  i = 0; i < currentCollPoints.length; i++){
          if(calcDist(currentCollPoints[i],planes.right) < min){
            rotSpeed*=-1
            xSpeed*=-1
            console.log('right');
            return
          }
        }
    }

    function render() {
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);  

      glMatrix.mat4.lookAt(vm,
        [xpos,0.0,zoom], //posisi kamera
        [0.0,0.0,-2.0], //ke mana menghadap
        [0.0,1.0,0.0] // ke mana arah atas kamera
      );
      gl.uniformMatrix4fv(vmLoc,false,vm);
      theta+=thetaSpeed;
      // glMatrix.mat4.translate(nm,nm, [0.0,0.0,2.0]);
      if(axis[0]) glMatrix.mat4.rotateZ(nm, nm, thetaSpeed);
      if(axis[1]) glMatrix.mat4.rotateY(nm, nm, thetaSpeed);
      if(axis[2]) glMatrix.mat4.rotateX(nm, nm, thetaSpeed);
      // glMatrix.mat4.translate(nm,nm, [0.0,0.0,-2.0]);
      
      var temp = glMatrix.mat4.clone(nm);
      initLetterBuffers();
      glMatrix.mat4.scale(nm,nm,[0.5,0.25,0.5]);
      glMatrix.mat4.translate(nm,nm, [-0.25,0.0,0.0]);

      xOff+=xSpeed;
      yOff+=ySpeed;
      zOff+=zSpeed;
      rot+=rotSpeed;

      glMatrix.mat4.translate(nm,nm, [xOff,yOff,zOff]);
      glMatrix.mat4.rotateY(nm,nm,rot);
      gl.uniformMatrix4fv(nmloc, false, nm);
      gl.drawArrays(gl.TRIANGLES, 0, totalVertices);

      currentCollPoints =[];
      for(var i=0; i<collisionPoints.length; i++){
        var v = glMatrix.vec4.fromValues(...collisionPoints[i],1.0);
        glMatrix.vec4.transformMat4(v, v, nm);
        currentCollPoints.push(v);
      }

      nm = glMatrix.mat4.clone(temp); 
      initCubeBuffers();
      currentCubePoints =[];
      for(var i = 0; i<cubePoints.length; i++){
        var v = glMatrix.vec4.fromValues(...cubePoints[i],1.0);
        glMatrix.vec4.transformMat4(v,v,nm);
        currentCubePoints.push(v);
      }

      planes.front = [currentCubePoints[0],currentCubePoints[1],currentCubePoints[2]]
      planes.back = [currentCubePoints[4],currentCubePoints[5],currentCubePoints[6]]
      planes.right = [currentCubePoints[2],currentCubePoints[3],currentCubePoints[7]]
      planes.left = [currentCubePoints[0],currentCubePoints[1],currentCubePoints[5]]
      planes.top = [currentCubePoints[1],currentCubePoints[2],currentCubePoints[6]]
      planes.bottom = [currentCubePoints[0],currentCubePoints[3],currentCubePoints[7]]
      gl.uniformMatrix4fv(nmloc, false, nm);
      gl.drawArrays(gl.LINES, 0, 48); 

      

      CollisionCheck();
      
      nm = glMatrix.mat4.clone(temp); 

      
      requestAnimationFrame(render);
    }
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST)
    render();

  }
})();