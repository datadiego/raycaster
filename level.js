class Level{
    constructor(width, height){
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
        for(let i = 0; i < this.width; i++){
            this.map.push([]);
            for(let j = 0; j < this.height; j++){
                let valor = Math.random()*100;
                if(valor < 20){
                    let wall = new Wall(j, i, this);
                    wall.actualizaMapa();
                    this.walls.push(wall);
                }else{
                let suelo = new Suelo(j, i, this);
                suelo.actualizaMapa();
                this.floors.push(suelo);
                }
            }
        }
        console.log(this.map)
        console.log(this.walls)
    }
}