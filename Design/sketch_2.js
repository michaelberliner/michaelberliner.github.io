let activity = [30, 10, 10, 10, 20, 30, 20, 10, 10, 30, 20, 20, 20, 30, 10, 30, 20, 20, 20, 20, 30];
let toilet = [6,5,7,7,8,9,10,8,7,6,7,7,8,9,9,8,7,7,6,5,5];



function setup() {
  createCanvas(1200, 800);
  noLoop();
  colorMode(HSB, 360, 100, 100);

}

function draw() {
  background(0);
  print(activity.length);


  for (let i = 0; i < activity.length; i = i + 1) {
    
    if (activity[i] == 10){
   fill(10,45,100);
   stroke(10,45,100);
    strokeWeight(4);
    mappedActivity = map(activity[i], 5,60, height / 4, width);
    rect(-8, i * 800/ activity.length+6, mappedActivity, width / (activity.length + 30), 50);

    }

        if (activity[i] == 20){
      fill(120,45,100);
   stroke(120,45,100);
    strokeWeight(4);
    mappedActivity = map(activity[i], 16, 60, height / 4, width);
    rect(-8, i * 800/ activity.length+6, mappedActivity, width / (activity.length + 30), 50);

    }
    
            if (activity[i] == 30){
    noFill();
   stroke(240, 75, 100);
    strokeWeight(4);
    mappedActivity = map(activity[i], 27, 60, height / 4, width);
    rect(-8, i * 800/ activity.length+6, mappedActivity, width / (activity.length + 30), 50);

    }
    
  }
  
  push();
  noStroke();
  fill(255);
  rect(1030,0,700,800);
  pop();
  
  for (let i = 0; i < toilet.length; i = i + 1){
    if (toilet[i] == 5){
      stroke(255);
      fill(60, 60, 90);
      mappedToilet = map(toilet[i], 5, 20, height / 4, width);
      ellipse(width/1.2,i*820/toilet.length,mappedToilet/2,width/toilet.length);
    }
     if (toilet[i] == 6){
      stroke(255);
      fill(60, 60, 90);
      mappedToilet = map(toilet[i], 5, 20, height / 4, width);
      ellipse(width/1.2,i*820/toilet.length,mappedToilet/2,width/toilet.length);
    }
     if (toilet[i] == 7){
      stroke(255);
      fill(60, 60, 90);
      mappedToilet = map(toilet[i], 5, 20, height / 4, width);
      ellipse(width/1.2,i*820/toilet.length,mappedToilet/2,width/toilet.length);
    }
    if (toilet[i] == 8){
      stroke(255);
      fill(60, 60, 90);
      mappedToilet = map(toilet[i], 5, 20, height / 4, width);
      ellipse(width/1.2,i*820/toilet.length,mappedToilet/2,width/toilet.length);
    }
    if (toilet[i] == 9){
      stroke(255);
      fill(60, 60, 90);
      mappedToilet = map(toilet[i], 3, 20, height / 4, width);
      ellipse(width/1.2,i*820/toilet.length,mappedToilet/2,width/toilet.length);
    }
    if (toilet[i] == 10){
      stroke(255);
      fill(60, 60, 90);
      mappedToilet = map(toilet[i], 2, 20, height / 4, width);
      ellipse(width/1.2,i*820/toilet.length,mappedToilet/2,width/toilet.length);
    }
  }
 
   

  
  push();
  noStroke();
  fill(20, 30, 100);
  textSize(30);
  translate(335, 90);
  text('INSIDE / OUTSIDE ACTIVITY', 0, 0);
  pop();
  push();
  noStroke();
  fill(20, 60, 100);
  textSize(20);
  translate(335, 125);
  text('Covid-19 Quarantine', 0, 0);
  pop();
  push();
  noStroke();
  fill(20,30,100);
  textSize(20);
  translate(340, 595);
  text('Activity Log',0,0);
  pop();
  push();
  noStroke();
  fill(20,60,100);
  textSize(12);
  translate(340, 620);
  text('For the 21 day quarantine:',0,0);
pop();
  push();
  noFill();
   stroke(240, 75, 100);
    strokeWeight(4);
  translate(340,650);
  rect(0,0,50,10,50);
  pop();
   push();
  fill(120,45,100);
   stroke(120,45,100);
  translate(340,680);
  rect(0,0,50,10,50);
  pop();
    push();
  fill(10,45,100);
   stroke(10,45,100);
  translate(340,710);
  rect(0,0,50,10,50);
  pop();
   push();
  noStroke();
  fill(20,60,100);
  textSize(12);
  translate(400, 658);
  text('Outside adventure',0,0);
pop();
    push();
  noStroke();
  fill(20,60,100);
  textSize(12);
  translate(400, 688);
  text('Inside (Good Day)',0,0);
pop();
  push();
  noStroke();
  fill(20,60,100);
  textSize(12);
  translate(400, 718);
  text('Inside (Bad Day)',0,0);
pop();
  
  push();
  noStroke();
  fill(60, 60, 90);
  textSize(30);
  translate(740, 500);
  rotate(-HALF_PI);
  text('TOILET ACTIVITY',0,0);
pop();
    push();
  noStroke();
  fill(255);
  textSize(20);
  translate(774, 476);
  rotate(-HALF_PI);
  text('21 Days of Toilet Time',0,0);
pop();
  push();
  noStroke();
  fill(60, 60, 90);
  textSize(17);
  translate(740, 620);
  text('Largest bowl:',0,0);
pop();
  push();
  noStroke();
  fill(255);
  textSize(12);
  translate(740, 640);
  text('10 bathroom visits',0,0);
pop();
   push();
  noStroke();
  fill(60, 60, 90);
  textSize(17);
  translate(740, 700);
  text('Smallest bowl:',0,0);
pop();
  push();
  noStroke();
  fill(255);
  textSize(12);
  translate(740, 720);
  text('5 bathroom visits',0,0);
pop();
  push();
  stroke(255);
  strokeWeight(2);
  line(847,615,870,568);
  pop();
  push();
  stroke(255);
  strokeWeight(2);
  line(856,696,940,739);
  pop();
}