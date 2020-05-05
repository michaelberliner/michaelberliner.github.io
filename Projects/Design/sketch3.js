                 function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  angleMode(DEGREES);

  
  
}

function draw() {
    
  let s=second();
  let m=millis();
  let h=hour();
  let y=year();
  let d=day();
  let mo=month();
  let mi=minute();
      background(40,100,60);
    
     push();
  let t = ('\n'+d+h+s+y+mo+mi);
  noStroke();
  fill(255);
  textSize(70);
  text(t,140,800);
  pop();
    
  push();
  noFill();
  stroke(250,50,100);
  strokeWeight(30);
  let clock1 = map(s,0,60,0,360);
   arc(840, 450, 300, 300,0,clock1);
  pop();
 
  push();
  noFill();
  stroke(260,70,100);
  strokeWeight(30);
  let clock2 = map(m/100,0,60,0,360);
  arc(840, 450,200,200,0,clock2);
  pop();
 
  push();
  noFill();
  stroke(200,39,100);
  strokeWeight(30);
  let clock3 = map(h,0,24,0,360);
  arc(840, 450,400,400,0,clock3);
  pop();

  push();
  noFill();
  stroke(190,28,100);
  strokeWeight(30);
  let clock4 = map(d,0,31,0,360);
  arc(840, 450,500,500,0,clock4);

  push();
  noFill();
  stroke(180,20,100);
  strokeWeight(30);
  let clock5 = map(y,0,3000,0,360);
  arc(840, 450,600,600,0,clock5);
  pop();

  push();
  noFill();
stroke(170,10,100);
  strokeWeight(30);
  let clock6 = map(m/50,0,60,0,360)
  arc(840, 450,700,700,0,clock6);
  pop();


  

 
  
  stop();
  
}