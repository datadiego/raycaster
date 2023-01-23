class Level{
    constructor(width, height){
        this.map = [];
        this.map_objects = [];
        this.player = null;
        // this.situaJugador();
        this.width = width;
        this.height = height;
        this.heat = 0; //the more heat, the more enemies
        this.enemies = [];
        this.nuevoMapa();
        this.player.actualizaWays();
        this.player.actualizaAcciones();
        console.log(this.player.accion);
    }
    
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
                if(x == 3 && y == 5){
                    let enemy = new Enemy(x, y, this);
                    this.enemies.push(enemy);
                }
                if(x == 5 && y == 3){
                    let enemy = new Enemy(x, y, this);
                    this.enemies.push(enemy);
                }
                if(x == 3 && y == 0){
                    let enemy = new Enemy(x, y, this);
                    this.enemies.push(enemy);
                }
                if(x == 0 && y == 3){
                    let enemy = new Enemy(x, y, this);
                    this.enemies.push(enemy);
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