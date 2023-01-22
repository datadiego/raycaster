class Level{
    constructor(width, height, window){
        this.map = [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ];
        this.nuevoMapa();
        this.width = width;
        this.height = height;
        this.heat = 0; //the more heat, the more enemies
        this.player = null;
        this.enemies = [];
        this.floors = [];
        this.walls = [];

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
        console.log(this.map)
        console.log(this.walls)
    }
}