function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight*9);
    canvas.position(0,0);
    canvas.style('z-index','-1');
  
  }


function draw() {
  
   for (let i=100; i<200; i++){
     let i
  fill(random(i));
    ellipse(random(windowWidth), random(windowHeight*9), random(i));
}
}