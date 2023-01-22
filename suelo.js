class Suelo{
    constructor(x, y, level){
        this.x = x;
        this.y = y;
        this.walkable = true;
        this.isEnemy = false;
        this.valor = 0;
        this.level = level;
    }
    actualizaMapa(){
        this.level.map[this.y][this.x] = this.valor;
    }
}

class Muro{
    constructor(x, y, level){
        this.x = x;
        this.y = y;
        this.walkable = false;
        this.isEnemy = false;
        this.valor = 1;
        this.level = level;
        this.health = 1;
    }
    actualizaMapa(){
        this.level.map[this.y][this.x] = this.valor;
    }
}

class Enemy{
    constructor(x, y, level){
        this.x = x;
        this.y = y;
        this.walkable = false;
        this.isEnemy = true;
        this.valor = 3;
        this.level = level;
        this.health = 1;
    }
    actualizaMapa(){
        this.level.map[this.y][this.x] = this.valor;
    }
}

class Player{
    constructor(x, y, level){
        this.x = x;
        this.y = y;
        this.walkable = false;
        this.isEnemy = false;
        this.valor = 2;
        this.level = level;
        this.health = 1;
    }
    actualizaMapa(){
        this.level.map[this.y][this.x] = this.valor;
    }
}

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
        this.width = width;
        this.height = height;
        this.player = null;
        this.enemies = [];
        this.floor = [];
        this.wall = [];

    }
    nuevoMapa(){
    this.map = [];
    this.floor = [];
    this.wall = [];
        for(let i = 0; i < this.width; i++){
            this.map.push([]);
            for(let j = 0; j < this.height; j++){
                let suelo = new Suelo(j, i, this);
                suelo.actualizaMapa();
                this.floor.push(suelo);
            }
        }
    }
}

class Game{
    constructor(){
        this.level = new Level(6,6);
        this.level.nuevoMapa();
    }
}

function inicializa(){
    let game = new Game();
}