let noiseOffset = 0.0;
let = strokeWidth = 25;
let slider;
let r = 10;
let g = 10;
let b = 10;
let a = 100;
let cnv;

function setup() {
  cnv = createCanvas(900, 1100);
  cnv.parent("#canvasDiv");
  background(254, 251, 198);
  drawBackpaper();

  slider = createSlider(0, 200, 1);
  slider.class("strokeSlider");
}

function draw() {
  background(254, 251, 198, .05); // last number is transparency
  //Name Tag Rect.
  fill(185, 244, 255);
  stroke(255, 109, 160);
  strokeWeight(5);
  fill(255, 109, 160);
  stroke(255, 109, 160);
  strokeWeight(5);
  rect(650, 3, 750, 115);
  textSize(35);
  noStroke();
  fill(0, 0, 0);
  text('To:', 665, 45);

  //slider
  let lineWidth = slider.value();
  strokeWeight(lineWidth);
  stroke(r, g, b);
  //stroke
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  //Paper Wrap the backside
  drawFrontpaper();
}


  //BG ITEMS ON CANVAS
function drawFrontpaper() {
  //frontpaper of bouquet
  fill(236, 252, 255);
  noStroke();
  beginShape();
  vertex(675, 750);
  vertex(450, 950);
  vertex(225, 750);
  vertex(450, 1500);
  endShape(CLOSE);
}

function drawBackpaper() {
  //backpaper of bouquet
  fill(185, 244, 255);
  noStroke();
  beginShape();
  vertex(225, 650);
  vertex(450, 450);
  vertex(675, 650);
  vertex(675, 750);
  vertex(450, 950);
  vertex(225, 750);
  endShape(CLOSE);
}


function keyTyped() {
  //save image
  if (key === 's') {
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    //clear the Canvas
    clear();
    background(254, 251, 198);
    drawBackpaper();
  } else if (key === 'o') {
    //to make rings on the stroke
    stroke(-r, -g, -b, 66);
    noFill();
    circle(mouseX, mouseY, strokeWidth, 40);
  } else if (key === 'u') {
    //to make circles on the stroke
    fill(r,g,b,a);
    circle(mouseX, mouseY, 75);
  }  //controls for colors//
  else if (key === 'r') {
    r += 8;
  } else if (key === 'g') {
    g += 8;
  } else if (key === 'b') {
    b += 8;
  } else if (key === 'a') {
    a += 10;
  } else if (key === 'w') {
    r -= 8;
  } else if (key === 'd') {
    g -= 8;
  } else if (key === 'v') {
    b -= 8;
  } else if (key === 'f') {
    a -= 10;
  }

}
