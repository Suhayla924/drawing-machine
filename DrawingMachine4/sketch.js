
let noiseOffset = 0.0;
let = strokeWidth = 25;

function setup() {
  createCanvas(700, 700);
  
  drawGrid();
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
    drawGrid();
  } else if (key === 'r') {
    //to make rings on the stroke
    stroke (92,250,220);
    circle(mouseX , mouseY, strokeWidth, 40);
    circle(width - mouseX , height - mouseY, strokeWidth, 40);
  }
}

function drawGrid(){
  numCells = 20;
  fillColor = 255;
  strokeWeight(0); 

  for(let i=0; i <= width; i += width / numCells){
    for ( let j =0; j <= height; j += height / numCells){
    if (fillColor === 255){
      fillColor = 200;
    } else {
      fillColor = 255;
    }
    fill(fillColor);
    rect(i, j, width / numCells, height / numCells);
    }
  }

  strokeWeight(35);
}
