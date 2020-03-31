function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,100);
    canvas.style('z-index','-1');
  
  }


function draw() {
  
   for (let i=100; i<200; i++){
     let i
  fill(random(i));
    ellipse(random(windowWidth), random(windowHeight), random(i));
}
}