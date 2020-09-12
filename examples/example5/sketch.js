/*

FORKED FROM 
 * twisted lines
 *
 * @author aadebdeb
 * @date 2017/02/04

 Fork by Nina Lutz 2020
 */

var colors;
var type;

function setup() {
  createCanvas(600, 600)
  
  colors = [
    color(255, 0, 0),
    color(0, 255, 0),
    color(0, 0, 255)
  ];
  
  type = 0;
}

function draw() {

  blendMode(BLEND);
  background(0, 50)
  fill(0);
  blendMode(EXCLUSION);
  noFill();
  strokeWeight(20);
  for(var i = 0; i < 3; i++) {
    stroke(colors[i]);
    beginShape();
    for(var w = -20; w < width + 20; w += 5) {
      var h = height / 2;
      h += 200 * sin(w * 0.03 + frameCount * 0.07 + i * TWO_PI / 3) * pow(abs(sin(w * 0.001 + frameCount * 0.02)), 5);
      curveVertex(h, w);
    }    
    endShape();
    beginShape();
    stroke(colors[0]);
    for(var w = -20; w < width + 20; w += 5) {
      var h = height / 2;
      h += 200 * sin(w * 0.03 + frameCount * 0.07 + i * TWO_PI / 3) * pow(abs(sin(w * 0.001 + frameCount * 0.02)), 5);
      curveVertex(h + 20, w);
    }    
    endShape();
    beginShape();
    stroke(colors[1]);
    for(var w = -20; w < width + 20; w += 5) {
      var h = height / 2;
      h += 200 * sin(w * 0.03 + frameCount * 0.07 + i * TWO_PI / 3) * pow(abs(sin(w * 0.001 + frameCount * 0.02)), 5);
      curveVertex(h + 40, w);
    }    
    endShape();
    beginShape();
    stroke(colors[2]);
    for(var w = -20; w < width + 20; w += 5) {
      var h = height / 2;
      h += 200 * sin(w * 0.03 + frameCount * 0.07 + i * TWO_PI / 3) * pow(abs(sin(w * 0.001 + frameCount * 0.02)), 5);
      curveVertex(h - 20, w);
    }    
    endShape();
  }
  

}

// function mousePressed() {
//   if(type == 0) {
//     type = 1;
//   } else {
//     type = 0;
//   }
// }