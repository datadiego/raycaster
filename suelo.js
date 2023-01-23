class Suelo{
    constructor(x, y, level){
        this.x = x;
        this.y = y;
        this.walkable = true;
        this.isEnemy = false;
        this.valor = 0;
        this.level = level;
        this.tile = "suelo"
        this.actualizaMapa();
    }
    actualizaMapa(){
        this.level.map[this.y][this.x] = this.valor;
        this.level.map_objects[this.y][this.x] = this;
    }
}

