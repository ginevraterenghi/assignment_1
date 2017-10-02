function setup() {
  
  createCanvas(800,600);
  colorMode(HSB);
  background(14,23,88);
  strokeWeight(3);
}

function draw() {
  
  // Antennas

  stroke(0,40,84);
  line(357,129,364,138);
  
  stroke(0,40,84);
  line(443,50,420,130);
  
  stroke(0,40,84);
  line(464,204,499,212);

  // Neck
  
  stroke(0,40,84);
  line(387,253,387,335);
  
  stroke(0,40,84);
  line(402,255,402,335);
  
  stroke(0,40,84);
  line(416,252,416,335);
  
  // Head
  
  fill(347,62,45);
  noStroke();
  ellipse(401,191,129,129);

  // Eyes
  
  fill(50,40,64); 
  ellipse(430,155,13,13);
  
  fill(50,40,64);
  ellipse(382,181,17,17);
  
  fill(50,40,64);
  ellipse(443,200,8,8);
  
  fill(12,0,100);
  ellipse(417,185,42,42);
  
  fill(50,40,64);
  ellipse(420,186,8,8);
  
  //Feet
  
  fill(50,40,64);
  ellipse(385,509,87,87);
  
  // Body
  
  fill(12,86,92);
  rect(320,335,132,168);
  
  fill(347,62,45);
  rect(320,359,132,10);
  
}