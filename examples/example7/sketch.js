var globe;
var numElements = 20;

var angle = 0;
var m = 0;
var mchange = 0;
var a = 2;
var b = 1;

function setup(){
  createCanvas(600,600)
  globe = new Array((numElements+1)*(numElements+1));
  background(0)
}

function getRadius(theta, m, n1, n2, n3){
  var t1=abs((1/a)*cos(m*theta/4));
  t1=pow(t1,n2);
  var t2=abs((1/b)*sin(m*theta/4));
  t2=pow(t2,n3);
  var t3 =t1+t2;
  var r=pow(t3,-1/n1);
  return r;
}

function draw(){
  if (second() == 59 || second() == 30){
    angle = 0;
    m = 0;
    mchange = 0;
    a = 2;
    b = 1;
  }
  background(0, 5);

  m=map(sin(mchange),-1,1,0,7);
  mchange+=0.005;

  var r=200;

  for(var i=0;i<numElements+1;i++){
    globe[i] =[];
    var value1 =map(i,0,numElements,-HALF_PI,HALF_PI);
    var r2 = getRadius(value1,m,0.2,1.7,1.7);

    for(var j=0;j<numElements+1;j++){
      var value2 = map(j,0,numElements,-PI,PI);
      var r1=getRadius(value2,m,0.2,1.7,1.7);

      var x = r*r1*cos(value2)*r2*cos(value1);
      var y = r*r1*sin(value2)*r2*cos(value1);

      var index=i+j*(numElements+1);
      globe[index] = createVector(x,y);
    }
  }

  for(var i=0;i<numElements;i+=2){
    for(var j=0;j<numElements+1;j+=2){
      var index1=i+j*(numElements+1);
      var v1 = globe[index1];
      var index2=(i+1)+j*(numElements+1);
      var v2 = globe[index2];
      stroke(map(i,0,numElements,0,200));
      noFill();
     
      ellipse(v1.x + width/2,v1.y + height/2,v2.x + width/2,v2.y + height/2);
    }
  }
  angle+=0.3;
}