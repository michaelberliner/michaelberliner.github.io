function setup() {
  createCanvas(windowWidth, windowHeight);
 
  }


function draw() {

   for (let i=0; i<60; i++){
     let s=map(100,30,0,500,50);
     frameRate(5);
  fill(random(i), random(255), random(255), random(100));
    ellipse(random(windowWidth), random(windowHeight), random(s));
}
}