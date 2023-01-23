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
        this.accion = {
            "up": "wait",
            "down": "wait",
            "left": "wait",
            "right": "wait"
        }
        this.ways = {
            "up": [],
            "down": [],
            "left": [],
            "right": []
        }
    }
    actualizaAccion(dir){
        for(let i=0; i < this.ways[dir].length; i++){
            if(this.isEnemyBeforeWall(dir)){
                this.accion[dir] = "attack";
                break;
            }
            if(this.ways[dir][i].walkable && i == 0){
                this.accion[dir] = "move";
                break;
            }
            this.accion[dir] = "wait";
        }
    }
    actualizaAcciones(){
            this.actualizaAccion("up");
            this.actualizaAccion("down");
            this.actualizaAccion("left");
            this.actualizaAccion("right");

            
    }
    isEnemyBeforeWall(dir){
        let enemy = false;
        let wall = false;
        for(let i = 0; i < this.ways[dir].length; i++){
            if(this.ways[dir][i].isEnemy){
                enemy = true;
                break;
            }
            if(!this.ways[dir][i].walkable){
                wall = true;
                break;
            }
        }
        if(enemy){
            return true;
        }
        else{
            return false;
        }
    }
    actualizaWays(){
        this.ways.up = this.getWay("up");
        this.ways.down = this.getWay("down");
        this.ways.left = this.getWay("left");
        this.ways.right = this.getWay("right");
    }
    getWay(dir){
        let way = [];
        if(dir == "up"){
            for(let i = this.y-1; i >= 0; i--){
                way.push(this.level.map_objects[i][this.x]);
            }
        }
        if(dir == "down"){
            for(let i = this.y+1; i < this.level.height; i++){
                way.push(this.level.map_objects[i][this.x]);
            }
        }
        if(dir == "left"){
            for(let i = this.x-1; i >= 0; i--){
                way.push(this.level.map_objects[this.y][i]);
            }
        }   
        if(dir == "right"){
            for(let i = this.x+1; i < this.level.width; i++){
                way.push(this.level.map_objects[this.y][i]);
            }
        }
        console.log(dir, way)
        return way
        
    }
    actualizaMapa(){
        this.level.map[this.y][this.x] = this.valor;
        this.level.map_objects[this.y][this.x] = this;
    }
}