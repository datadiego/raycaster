class Level{
    constructor(width, height){
        this.map = [];
        this.map_objects = [];
        this.player = null;
        this.width = width;
        this.height = height;
        this.heat = 0; //the more heat, the more enemies
        this.enemies = [];
        this.nuevoMapa();
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
    nuevoMapa(){
    this.map = [];
    this.map_objects = [];
    this.enemies = [];
    let playerX = 3;
    let playerY = 3;
    let salidaX = 5;
    let salidaY = 5;
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
        console.log("mapa creado:", this.map);
    }
}