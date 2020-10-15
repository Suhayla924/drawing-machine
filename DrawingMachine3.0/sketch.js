let array = [];

function setup() {
  createCanvas(600, 600);
  background(255);
  noFill();
}

function draw() {
  //(mouseIsPressed == false) is the same as (!mouseIsPressed)
  if (mouseIsPressed) {
    //ellipse(mouseX, mouseY, 10, 10);
    background(0);
    stroke(map(mouseX, 0, 600, 0, 237, true), map(mouseY, 600, 0, 139, 0, true));
    strokeWeight(map(mouseX, 0, 600, 0, 50, true));
    //line(mouseX, mouseY, pmouseX, pmouseY);
    //  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
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
    for (let i = 0; i < array.length; i++){
    //  line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  } else if (key === 'c'){
    ellipse(mouseX, mouseY, 10, 10);
    stroke(map(mouseX, 0, 600, 0, 237, true), map(mouseY, 600, 0, 139, 0, true));
  }
  return false;
}

//not a function is a true or false system variable
//if mouse is pressed= true if not pressed = false
