
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
    }

    nuevoMapa(){
    this.map = [];
    this.map_objects = [];
    let playerX = 1;
    let playerY = 1;
    
        for(let x = 0; x < this.width; x++){
            this.map.push([]);
            this.map_objects.push([]);
            for(let y = 0; y < this.height; y++){
                let valor = Math.random()*100;
                if(valor < 20){
                    let wall = new Wall(x, y, this);
                }else{
                    let suelo = new Suelo(x, y, this);
                }
                if(x == playerX && y == playerY){
                    this.player = new Player(x, y, this);
                }
            }
        }
        console.log(this.map_objects)
        
    }
}