class Level{
    constructor(width, height){
        this.map = [];
        this.map_objects = [];
        this.player = null;
        this.width = width;
        this.height = height;
        this.enemies = [];
        let playerX = 3;
        let playerY = 3;
        this.nuevoMapa(playerX, playerY);

    }
    getNeighbors(x, y){
        let neighbors = [];
        if(x > 0){
            neighbors.push(this.map_objects[y][x-1]);
        }
        if(x < this.width-1){
            neighbors.push(this.map_objects[y][x+1]);
        }
        if(y > 0){
            neighbors.push(this.map_objects[y-1][x]);
        }
        if(y < this.height-1){
            neighbors.push(this.map_objects[y+1][x]);
        }
        return neighbors;
    }
    checkPath(playerX, playerY){
        let queue = [];
        let visited = [];
        let path = [];
        let current = this.player;
        let camino = false;
        queue.push(current);
        while(queue.length > 0){
            current = queue.shift(); 
            visited.push(current);
            if(current.tile == "salida"){
               camino = true;
               break;
            }
            let neighbors = this.getNeighbors(current.x, current.y);
            for(let i = 0; i < neighbors.length; i++){
                if(neighbors[i].walkable && !visited.includes(neighbors[i])){
                    queue.push(neighbors[i]);
                }
            }
        }
        if(!camino){
            this.nuevoMapa(playerX, playerY);
        }
        else{
            console.log("Hay camino hasta la salida");
        }
    }
    checkPasos(){
        console.log("comprobando pasos");
        let portales = this.buscaTiles("portal");
        if(portales.length >= 0){
            for (let i = 0; i < portales.length; i++) {
                portales[i].contador -= 1;
                console.log(portales[i].contador)
                if(portales[i].contador == 0){
                    let enemy = new Enemy(portales[i].x, portales[i].y, this);
                }
            }
        }
        if(pasos % 3 == 0){
            let position = this.buscaTile("suelo")
            let portal = new Portal(position.x, position.y, this);
        }
        
    }
    buscaTiles(tile){
        let tiles = [];
        for(let y = 0; y < this.height; y++){
            for(let x = 0; x < this.width; x++){
                if(this.map_objects[y][x].tile == tile){
                    tiles.push(this.map_objects[y][x]);
                }
            }
        }
        return tiles;
    }
    buscaTile(tile){
        let encontrado = false;
        while(!encontrado){
            let x = Math.floor(Math.random()*this.width);
            let y = Math.floor(Math.random()*this.height);
            if(this.map_objects[y][x].tile == tile){
                encontrado = true;
                return this.map_objects[y][x];
            }
        }
    }
    swapTiles(x1, y1, x2, y2){
        let temp = this.map_objects[y1][x1];
        this.map_objects[y1][x1] = this.map_objects[y2][x2];
        this.map_objects[y2][x2] = temp;
        this.map_objects[y1][x1].x = x1;
        this.map_objects[y1][x1].y = y1;
        this.map_objects[y2][x2].x = x2;
        this.map_objects[y2][x2].y = y2;
        this.actualizaMapa()
    }
    actualizaMapa(){
        for(let y = 0; y < this.height; y++){
            for(let x = 0; x < this.width; x++){
            this.map_objects[y][x].actualizaMapa();
            }}}
    nuevoMapa(playerX, playerY){
    this.map = [];
    this.map_objects = [];
    this.enemies = [];
    let posicionesSalida = [1, this.width-2]
    let salidaX = getRandomElement(posicionesSalida);
    let salidaY = getRandomElement(posicionesSalida);
    while(salidaX == playerX && salidaY == playerY){
        salidaX = getRandomElement(posicionesSalida);
        salidaY = getRandomElement(posicionesSalida);
    }
        for(let y = 0; y < this.height; y++){
            this.map.push([]);
            this.map_objects.push([]);
            for(let x = 0; x < this.width; x++){
                let valor = Math.random()*100;
                if(valor < 20){
                    let wall = new Wall(x, y, this);
                }else{
                    let suelo = new Suelo(x, y, this);
                }
                if(x == 0 || y == 0 || x == this.width-1 || y == this.height-1){
                    let wall = new Wall(x, y, this);
                }
                if(x == playerX && y == playerY){
                    this.player = new Player(x, y, this);
                }
                if(x == salidaX && y == salidaY){
                    this.salida = new Salida(x, y, this);
                }
            }
        }
        this.checkPath(playerX, playerY);
    }
}