function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 canvas.position(0,0);
    canvas.style('z-index','-1');
    
  }


function draw() {
   for (let i=0; i<60; i++){
     let i
  fill(random(i), random(255), random(255), random(100));
    ellipse(random(windowWidth), random(windowHeight), random(i));
}
}