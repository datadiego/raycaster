let canvas;
let ctx;
let FPS = 50;
let nivel = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,1,1,0,0,0,1],
    [1,0,0,1,0,1,0,0,0,1],
    [1,0,0,1,1,1,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1]
]

class Level{
    constructor(can, con, arr){
        this.map = arr;
        this.canvas = can;
        this.ctx = con;

        //Dimensiones matriz
        this.altoM = this.map.length;
        this.anchoM = this.map[0].length;

        //Dimensiones canvas
        this.altoC = this.canvas.height;
        this.anchoC = this.canvas.width;

        //Dimensiones celda
        this.altoTile = this.altoC / this.altoM;
        this.anchoTile = this.anchoC / this.anchoM;

        console.log(this.altoM, this.anchoM, this.altoC, this.anchoC, this.altoTile, this.anchoTile)
    }
    draw(){
      let color = "#000000"
        for(let y = 0; y < this.altoM; y++){
            for(let x = 0; x < this.anchoM; x++){
                if(this.map[y][x] === 1){
                    ctx.fillStyle = "black";
                    ctx.fillRect(x*this.anchoTile, y*this.altoTile, 50, 50);
                }
                else{
                    ctx.fillStyle = "white";
                    ctx.fillRect(x*this.anchoTile, y*this.altoTile, 50, 50);
                }
            }
        }
    }
}


function inicializa(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
    level = new Level(canvas, ctx, nivel);
    
    setInterval(function(){
      principal();
    },1000/FPS);
}

function borrarCanvas(){
    canvas.width = canvas.width;
    canvas.height = canvas.height;
}


function principal(){
  console.log("LESGOOO")
    borrarCanvas();
    level.draw();
}