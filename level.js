
class Level{
    constructor(width, height){
        this.map = [];
        this.floors = [];
        this.walls = [];
        // this.situaJugador();
        this.width = width;
        this.height = height;
        this.heat = 0; //the more heat, the more enemies
        this.enemies = [];
        this.nuevoMapa();
        this.player = new Player(2, 2, this);

    }

    nuevoMapa(){
    this.map = [];
    this.floors = [];
    this.walls = [];
        for(let x = 0; x < this.width; x++){
            this.map.push([]); 
            for(let y = 0; y < this.height; y++){
                let valor = Math.random()*100;
                if(valor < 20){
                    let wall = new Wall(x, y, this);
                    wall.actualizaMapa();
                    this.walls.push(wall);
                }else{
                let suelo = new Suelo(x, y, this);
                suelo.actualizaMapa();
                this.floors.push(suelo);
                }
            }
        }
        
    }
}