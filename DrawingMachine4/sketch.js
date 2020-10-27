
let noiseOffset = 0.0;
let = strokeWidth = 25;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(106, 142, 235);
  strokeWeight(35);
}

function draw() {

  background(106, 142, 235, .05); // last number is transparency
  strokeWeight(strokeWidth);
  noiseOffset -= 0.05;
  strokeWidth = noise(noiseOffset) * 90;


  stroke(map(mouseX, 0, 500, 205, 0, true));
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);

}

function keyTyped() {
  //save image
  if (key === 's') {
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    //clear the noCanvas
    clear();
  } else if (key === 'r') {
    //to make rings on the stroke
    stroke(81,39,226);
    circle(mouseX , mouseY, strokeWidth, 40);
  }
}
