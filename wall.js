class Wall{
    constructor(x, y, level){
        this.x = x;
        this.y = y;
        this.walkable = false;
        this.isEnemy = false;
        this.valor = 1;
        this.level = level;
        this.health = 1;
        this.actualizaMapa();
    }
    actualizaMapa(){
        this.level.map[this.y][this.x] = this.valor;
        this.level.map_objects[this.y][this.x] = this;
    }
}