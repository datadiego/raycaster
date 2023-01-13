class Boundary{
    constructor(x1, y1, x2, y2){
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
        this.move();
    }
    move(){
            this.a.x = random(width);
            this.a.y = random(height);
            this.b.x = random(width);
            this.b.y = random(height);
    }
    show(){
        stroke(255);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
}