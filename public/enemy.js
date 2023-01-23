class Enemy{
    constructor(x, y, level){
        this.x = x;
        this.y = y;
        this.walkable = false;
        this.isEnemy = true;
        this.valor = 4;
        this.level = level;
        this.health = 1;
        this.actualizaMapa();
        this.tile = "enemy"
    }
    actualizaMapa(){
        this.level.map[this.y][this.x] = this.valor;
        this.level.map_objects[this.y][this.x] = this;
    }
}