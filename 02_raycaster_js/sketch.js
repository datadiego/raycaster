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
document.addEventListener("keydown", function(tecla){
    if(tecla.keyCode == 38){
        player.up();
    }
    else if(tecla.keyCode == 40){
        player.down();
    }
    else if(tecla.keyCode == 37){
        player.left();
    }
    else if(tecla.keyCode == 39){
        player.right();
    }

});

document.addEventListener("keyup", function(tecla){
    if(tecla.keyCode == 38){
        player.stopUp();
    }
    else if(tecla.keyCode == 40){
        player.stopDown();
    }
    else if(tecla.keyCode == 37){
        player.stopLeft();
    }
    else if(tecla.keyCode == 39){
        player.stopRight();
    }

});


let level;
let player;

//Normalizacion de angulos
function normalizarAngulo(angulo){
  angulo = angulo % (2 * Math.PI);
  if(angulo < 0){
    angulo = (2 * Math.PI) + angulo;
  }
  return angulo;
}
        

function inicializa(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 500;
  level = new Level(canvas, ctx, nivel);
  player = new Player(ctx, level, 100, 100);
  setInterval(function(){
    principal();
  },1000/FPS);
}

function borrarCanvas(){
  canvas.width = canvas.width;
  canvas.height = canvas.height;
}


function principal(){
  borrarCanvas();
  level.draw();
  player.dibuja();

}


