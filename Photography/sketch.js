
function setup() {
  canvas = createCanvas(windowWidth, windowHeight*9);
 canvas.position(0,0);
    canvas.style('z-index','-1');
    
  }


function draw() {
  
   for (let i=1300; i<2000; i++){
     let i
  fill(random(i), random(255), random(255), random(100));
    ellipse(random(windowWidth), random(windowHeight*9), random(i));
}
}