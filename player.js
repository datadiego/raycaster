class Player{
    constructor(nivel){
        this.x = 3;
        this.y = 1;
        this.nivel = nivel;
    }

    detectEnemy(way){
        for(let i = 0; i < way.length; i++){
            if(way[i] == 4){
                return true;
            }
        }
        return false;
    }
    detectDoor(way){
        for(let i = 0; i < way.length; i++){
            if(way[i] == 2){
                return true;
            }
        }
        return false;
    }
    detectWall(way){
        for(let i = 0; i < way.length; i++){
            if(way[i] == 1){
                return true;
            }
        }
        return false;
    }
    detectWalkable(way){
        if(way[0] == 0 
        || way[0] == 2){
            return true;
        }
        
        return false;
    }
    detectEnemyReachable(way){
        for(let i = 0; i < way.length; i++){
            if(way[i] == 4){ //Si hay un enemigo en el camino
                return true
            }
            else if(way[i] == 1){ //Si hay una pared en el camino
                return false
            }
        }
    }

    getAction(way){
        let isEnemy = this.detectEnemy(way);
        let isWalkable = this.detectWalkable(way);
        let isEnemyReachable = this.detectEnemyReachable(way);

        console.log("isEnemy: " + isEnemy)
        console.log("isWalkable: " + isWalkable)
        console.log("isEnemyReachable: " + isEnemyReachable)
        let action = "";
        if(isEnemy){
            if(isEnemyReachable){
                action = "attack"
            }
            else{
                action = "move"
            }
        }
        else if(isWalkable){
            action = "move"
        }
        else{
            action = "wait"
        }

        return action;
    }
    getWay(dir){
        let lastCheckCell;
        let way = []
        if(dir == "up"){
        for(let i = this.y - 1; i >= 0; i--){
            lastCheckCell = this.nivel.mapa[i][this.x];
            way.push(lastCheckCell)
        }
    }
    else if(dir == "down"){
        for(let i = this.y + 1; i < this.nivel.mapa.length; i++){
            lastCheckCell = this.nivel.mapa[i][this.x];
            way.push(lastCheckCell)
        }
    }
    else if(dir == "left"){
        for(let i = this.x - 1; i >= 0; i--){
            lastCheckCell = this.nivel.mapa[this.y][i];
            way.push(lastCheckCell)
        }
    }
    else if(dir == "right"){
        for(let i = this.x + 1; i < this.nivel.mapa[0].length; i++){
            lastCheckCell = this.nivel.mapa[this.y][i];
            way.push(lastCheckCell)
        }
    }

        return way;
    }
    up(){
        //Resto en la y
        let way = this.getWay("up");
        let action = this.getAction(way);
        console.log("way: " + way)
        console.log("action: " + action)
        if (action == "attack"){
            console.log("Ataco")
        }
        else if (action == "move"){
            this.moveUp();
        }

    }
    down(){
        //Sumo en la y
        let way = this.getWay("down");
        let action = this.getAction(way);
        console.log("way: " + way)
        console.log("action: " + action)
        if (action == "attack"){
            console.log("Ataco")
        }
        else if (action == "move"){
            this.moveDown();
        }
    }
    left(){
        //Resto en la x
        let way = this.getWay("left");
        let action = this.getAction(way);
        console.log("way: " + way)
        console.log("action: " + action)
        if (action == "attack"){
            console.log("Ataco")
        }
        else if (action == "move"){
            this.moveLeft();
        }

    }
    right(){
        //Sumo en la x
        let way = this.getWay("right");
        let action = this.getAction(way);
        console.log("way: " + way)
        console.log("action: " + action)
        if (action == "attack"){
            console.log("Ataco")
        }
        else if (action == "move"){
            this.moveRight();
        }

    }

    moveUp(){
        if(this.nivel.mapa[this.y-1][this.x] == 2){
            this.y -= 1;
            this.nivel.nuevo_mapa();
        }
        if(this.y > 0 && this.nivel.mapa[this.y - 1][this.x] != 1){
            this.nivel.mapa[this.y][this.x] = 0;
            this.y -= 1;
        }
    }
    moveDown(){
        if(this.nivel.mapa[this.y+1][this.x] == 2){
            this.y += 1;
            this.nivel.nuevo_mapa();
        }
        if(this.y < this.nivel.mapa.length - 1 && this.nivel.mapa[this.y + 1][this.x] != 1){
            this.nivel.mapa[this.y][this.x] = 0;
            this.y += 1;
        }
    }
    moveLeft(){
        if(this.nivel.mapa[this.y][this.x-1] == 2){
            this.x -= 1;
            this.nivel.nuevo_mapa();
        }
        if(this.x > 0 && this.nivel.mapa[this.y][this.x - 1] != 1){
            this.nivel.mapa[this.y][this.x] = 0;
            this.x -= 1;
        }
    }
    moveRight(){
        if(this.nivel.mapa[this.y][this.x+1] == 2){
            this.x += 1;
            this.nivel.nuevo_mapa();
        }
        if(this.x < this.nivel.mapa[0].length - 1 && this.nivel.mapa[this.y][this.x + 1] != 1){
            this.nivel.mapa[this.y][this.x] = 0;
            this.x += 1;
        }
    }
    dibuja(){
        this.nivel.mapa[this.y][this.x] = 3;
        this.nivel.dibuja();
    }
}