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
    constructor(){
        this.map = nivel;
    }
    draw(){
        for(let i = 0; i < this.map.length; i++){
            for(let j = 0; j < this.map[i].length; j++){
                if(this.map[i][j] === 1){
                    ctx.fillStyle = "black";
                    ctx.fillRect(j*50, i*50, 50, 50);
                }
            }
        }
    }
}
canvasWidth = 500;
canvasHeight = 500;

function inicializa(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    level = new Level();
    setInterval(function(){
        principal();
    },1000/FPS);
}

function borrarCanvas(){
    canvas.width = 500;
    canvas.height = 500;
}


function principal(){
  console.log("LESGOOO")
    borrarCanvas();
    level.draw();
}