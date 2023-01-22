class Wall{
    constructor(x, y, level){
        this.x = x;
        this.y = y;
        this.walkable = false;
        this.isEnemy = false;
        this.valor = 1;
        this.level = level;
        this.health = 1;
    }
    actualizaMapa(){
        this.level.map[this.x][this.y] = this.valor;
    }
}