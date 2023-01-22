class Player{
    constructor(x, y, level){
        this.x = x;
        this.y = y;
        this.walkable = false;
        this.isEnemy = false;
        this.valor = 3;
        this.level = level;
        this.health = 1;
        this.currentTile = this.encuentraSuelo(this.x, this.y);
        this.actualizaMapa();
    }
    encuentraSuelo(x, y){
        //find my floor tile
        for(let i = 0; i < this.level.floors.length; i++){
            if(this.level.floors[i].x == x && this.level.floors[i].y == y){
                return this.level.floors[i];
            }
        }
    }
    actualizaMapa(){
        this.currentTile = this.encuentraSuelo(this.x, this.y);
        this.level.map[this.x][this.y] = this.valor;
    }
}