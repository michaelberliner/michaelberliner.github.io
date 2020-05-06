let bg;
let table;

function preload() {
  table = loadTable('New_Jersey_Railroad_Stations.csv', 'csv', 'header');

}

function setup() {
  createCanvas(800, 1200);
colorMode(HSB, 360, 100,100,100);
  noLoop();
 
}

function draw() {
  
  let numRows = table.getRowCount();
  print(numRows);

  //get the columns of data
  //let Rail = table.getColumn("RAIL_LINE");
  let Latitude = table.getColumn("X");
  let Longitude = table.getColumn("Y");

  //let minRail = min(Rail);
 // let maxRail = max(Rail);

  //print("RAIL_LINE", minRail, maxRail);
let minLatitude = min(Latitude);
  let maxLatitude = max(Latitude);

  print("X", minLatitude, maxLatitude);
 
   let minLongitude = min(Longitude);
  let maxLongitude = max(Longitude);

  print("Y", minLongitude,maxLongitude);

   

  //iterate over the number of rows

  for (let i = 0; i < numRows; i++) {

    let newLongitude = map(Latitude[i], minLongitude, maxLongitude, 20, width);
    let newLatitude = map(Longitude[i], minLatitude, maxLatitude, height, 520);
    //let newRail = map(Rail[i], minRail, maxRail, 0, 285);

    stroke(0);
    fill(20,100,100,100);
    ellipse(newLongitude+140, newLatitude-50, 8, 8);

    if(Longitude[i] > 30000){
      fill(200,100,100,100);

  }

  }
push();
  strokeWeight(5);
  stroke(100,100,90,100);
  fill(200,100,60,100);
  ellipse(400,450,40,40);
  pop();
  push();
  textSize(30);
  noStroke();
  fill(200,100,60,100);
  text('My Lockdown Position:', 100,100);
  pop();
  push();
  textSize(20);
  noStroke();
  fill(100,100,80,100);
  text('related to the nearest escape route', 100,135);
  pop();
  push();
  strokeWeight(3);
  stroke(200,100,60,100);
  line(250,150,390,415);
  pop();
  push()
  noStroke();
  fill(20,100,100,100);
  textSize(20);
  text('Escape Routes:', 100,600);
  pop();
  push();
  noStroke();
  fill(0);
  textSize(15);
  text('=   NJ Train Station', 123,634);
  pop();
  push();
  stroke(0);
  fill(20,100,100,100);
  ellipse(105,630,8,8);
  pop();

}