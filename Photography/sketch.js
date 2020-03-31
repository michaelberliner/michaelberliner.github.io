function setup() {
  createCanvas(windowWidth, windowHeight);
 
  }


function draw() {
   for (let i=0; i<60; i++){
     let i
  fill(random(i), random(255), random(255), random(100));
    ellipse(random(windowWidth), random(windowHeight), random(i));
}
}