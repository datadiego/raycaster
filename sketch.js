let wall

function setup() {
  wall = new Boundary(300, 100, 300, 300)
  createCanvas(400, 400);
  background(0);
  wall.show()
}