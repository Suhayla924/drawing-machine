
let noiseOffset = 0.0;
let = strokeWidth = 25;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(106, 142, 235);
  function drawGrid();
  strokeWeight(35);
}

function draw() {

  background(106, 142, 235, .75); // last number is transparency
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
    background(106, 142, 235);
  } else if (key === 'r') {
    //to make rings on the stroke
    stroke(81,39,226);
    circle(mouseX , mouseY, strokeWidth, 40);
  }
}
function drawGrid(){
  numCells = 20;
  fillColor = 255;

  for (let x=0; x <= width; x += width / numCells){
    for(let y = 0; y <= height; y += height / numCells);
    rect(x,y, width / numCells, height / numCells);
  }
}