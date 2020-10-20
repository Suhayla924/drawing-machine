let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(windowWidth, windowHeight );
  background(backgroundColor);
  noFill();
  strokeWeight(4);
}

function draw() {
  //(mouseIsPressed == false) is the same as (!mouseIsPressed)
  if (mouseIsPressed) {
    // the "--" decreases as the "++" increases
    //"-=" is going to decrease backgroundColor by 2
    backgroundColor -= 4;
    background(backgroundColor);
    stroke(map(mouseX, 0, 600, 0, 237, true),(0,mouseY, 600, 0, 237, true));
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY])
  }
}

function keyTyped() {

  //save image
  if (key === 's') {
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    //display image
    background(255);
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //  line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  } else if (key === 'c') {
    ellipse(mouseX, mouseY, 10, 10);
    stroke(map(mouseX, 0, 600, 0, 237, true), map(mouseY, 600, 0, 139, 0, true));
  }
  return false;
}

function mousePressed(){
  array = [];
  backgroundColor= 255;
}
