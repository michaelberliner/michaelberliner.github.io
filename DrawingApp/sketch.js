function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(34, 33, 90);
}





function draw() {
  push();
  if (mouseIsPressed) {
    noFill();
    strokeWeight(1);
    stroke(51, 100, 100);
    triangle(mouseX, mouseY, mouseX * 5, mouseY * 5, 0, 600);
  } else {
    strokeWeight(3);
    stroke(65, 65, 65);
    line(0, mouseX + 50, windowWidth, mouseY + 50);
  }
  pop();

  push();
  if (keyIsPressed === true) {
    noFill();
    stroke(200, 83, 51);
    strokeWeight(4);
  } else {
    noFill();
    stroke(310, 70, 40);
    strokeWeight(2);
  }
  rect(mouseX, 0, 600, 6000);
  pop();
}


  function keyTyped() {
    if (key === '1') {
      background(mouseX,mouseY,100);
    } else if (key === '2') {
      background(34,33,90);
    }
  }
