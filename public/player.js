class Player{
    constructor(x, y, level){
        this.x = x;
        this.y = y;
        this.walkable = false;
        this.isEnemy = false;
        this.valor = 3;
        this.level = level;
        this.health = 3;
        this.tile = "player";
        this.actualizaMapa();

    }
    keyInput(key){
        let enemigo = false;
        let puedoMoverme = false;
        let salida = false;
        if(key == "up"){
            let way = this.getWay("up")
            enemigo = this.seeEnemyFirst(way);
            puedoMoverme = this.seeSuelo(way);
            salida = this.seeSalida(way);
        }
        if(key == "down"){
            let way = this.getWay("down")
            enemigo = this.seeEnemyFirst(way);
            puedoMoverme = this.seeSuelo(way);
            salida = this.seeSalida(way);
        }
        if(key == "left"){
            let way = this.getWay("left")
            enemigo = this.seeEnemyFirst(way);
            puedoMoverme = this.seeSuelo(way);
            salida = this.seeSalida(way);
        }
        if(key == "right"){
            let way = this.getWay("right")
            enemigo = this.seeEnemyFirst(way);
            puedoMoverme = this.seeSuelo(way);
            salida = this.seeSalida(way);
        }
        if(puedoMoverme && !enemigo){
            if(key == "up"){
                this.level.swapTiles(this.x, this.y, this.x, this.y-1);
                pasos += 1;
                this.level.checkPasos();
            }
            if(key == "down"){
                this.level.swapTiles(this.x, this.y, this.x, this.y+1);
                pasos += 1;
                this.level.checkPasos();
            }
            if(key == "left"){
                this.level.swapTiles(this.x, this.y, this.x-1, this.y);
                pasos += 1;
                this.level.checkPasos();
            }
            if(key == "right"){
                this.level.swapTiles(this.x, this.y, this.x+1, this.y);
                pasos += 1;
                this.level.checkPasos();
            }
            this.actualizaMapa();
        }
        if(salida){
            if(key == "up"){
                this.level.swapTiles(this.x, this.y, this.x, this.y-1);
                pasos += 1;
            }
            if(key == "down"){
                this.level.swapTiles(this.x, this.y, this.x, this.y+1);
                pasos += 1;
            }
            if(key == "left"){
                this.level.swapTiles(this.x, this.y, this.x-1, this.y);
                pasos += 1;
            }
            if(key == "right"){
                this.level.swapTiles(this.x, this.y, this.x+1, this.y);
                pasos += 1;
            }
            this.level.nuevoMapa(this.x, this.y);
            nivel += 1;
            console.log("nivel",nivel)
        }
        console.log("pasos",pasos)

    }
    seeSalida(way){
        if(way[0].tile == "salida"){
            return true;
        }
        return false;
    }
    seeSuelo(way){
        if (way[0].tile == "suelo"){
            return true;
        }
        return false;
    }
    seeEnemyFirst(way){
        for(let i = 0; i < way.length; i++){
            if(way[i].isEnemy){
                return true;
            }
            if(way[i].tile == "wall"){
                return false;
            }
        }
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
        return way
        
    }
    actualizaMapa(){
        this.level.map[this.y][this.x] = this.valor;
        this.level.map_objects[this.y][this.x] = this;
    }
}