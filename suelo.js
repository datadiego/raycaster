class Suelo{
    constructor(x, y, level){
        this.x = x;
        this.y = y;
        this.walkable = true;
        this.isEnemy = false;
        this.valor = 0;
        this.level = level;
    }
    actualizaMapa(){
        this.level.map[this.x][this.y] = this.valor;
    }
}

