let wall

function setup() {
  wall = new Boundary(300, 100, 300, 300)
  createCanvas(400, 400);

}

function draw() {
  background(0);
  wall.show();
}