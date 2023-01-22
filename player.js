class Player{
    constructor(x, y, level){
        this.x = x;
        this.y = y;
        this.walkable = false;
        this.isEnemy = false;
        this.valor = 3;
        this.level = level;
        this.health = 1;
        this.actualizaMapa();
    }

    actualizaMapa(){
        this.level.map[this.x][this.y] = this.valor;
        this.level.map_objects[this.x][this.y] = this;
    }
}