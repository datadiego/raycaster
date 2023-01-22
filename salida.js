class Salida{
    constructor(x, y, level){
        this.x = x;
        this.y = y;
        this.walkable = true;
        this.isEnemy = false;
        this.valor = 2;
        this.level = level;
        this.actualizaMapa();
    }

    actualizaMapa(){
        this.level.map[this.x][this.y] = this.valor;
        this.level.map_objects[this.x][this.y] = this;
    }
}