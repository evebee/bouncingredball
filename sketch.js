var time = 0
var x = 50
var y = 50

function setup() {
  createCanvas(500,500)
  frameRate(10)
}

function draw() {
  background(255)
  fill(252,10,10)
  noStroke()
  ellipse(x,y,50,50)
  if (x < 500) {
    if (time < 1){
      x = x + 10
      y = y - 20
      time = time + 1
    }
    else {
      x = x + 10
      y = y + 20
      time = 0
    }
  }
  else {
    x = 50
    y = 50
    time = 0
  }
}