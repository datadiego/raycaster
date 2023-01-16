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
class Ray{
  constructor(con, escenario, columna, x, y, anguloJugador, incrementoAngulo){
    this.ctx = con;
    this.level = escenario;
    this.col = columna
    this.x = x;
    this.y = y;
    this.anguloJugador = anguloJugador;
    this.incrementoAngulo = incrementoAngulo;
    console.log("Rayo creado" + this.anguloJugador);
  }

  cast(){
    this.xIntercept = 0;
    this.yIntercept = 0;
    
  }
}
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

      }
      colision(x,y){
        let choca = false;
        if(this.map[y][x] != 0){
          choca = true;
        }
        return choca;
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
        
class Player{
  constructor(con, escenario, x, y){
    this.ctx = con; //contexto
    this.level = escenario;
    this.x = x;
    this.y = y;
    this.avanza = 0; //0: no avanza, 1: avanza, 2: retrocede
    this.gira = 0; //0: no gira, 1: gira a la derecha, 2: gira a la izquierda
    this.rotacion = 0; //angulo de rotacion
    this.velocidadMovimiento = 3; //velocidad
    this.velocidadGiro = 3*(Math.PI/180); //velocidad de rotacion en grados, 3 grados
    this.rayo;
    this.rayo = new Ray(this.ctx, this.map, 0, this.x, this.y, this.rotacion, this.velocidadGiro);
  }
  
  colision(x, y){
    let choca = false;
    let tilex = Math.floor(x/this.level.anchoTile);
    let tiley = Math.floor(y/this.level.altoTile);
    if(this.level.colision(tilex, tiley)){
      choca = true;
    }
    return choca;
  }

  actualiza(){
    let nuevaX = this.x + (this.avanza*Math.cos(this.rotacion)*this.velocidadMovimiento);
    let nuevaY = this.y + (this.avanza*Math.sin(this.rotacion)*this.velocidadMovimiento);

    if(!this.colision(nuevaX, nuevaY)){ //si no choca
      this.x = nuevaX;
      this.y = nuevaY;
    }

    this.rotacion += (this.gira*this.velocidadGiro);
    this.rotacion = normalizarAngulo(this.rotacion);
    console.log("this.rotacion: " + this.rotacion);
    
  }

  dibuja(){
    this.ctx.fillStyle = "red";
    this.actualiza();
    this.ctx.fillRect(this.x-3, this.y-3, 6, 6);
    var xDestino = this.x + (Math.cos(this.rotacion)*40);
    var yDestino = this.y + (Math.sin(this.rotacion)*40);

    this.ctx.beginPath();
    this.ctx.strokeStyle = "red";
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(xDestino, yDestino);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  up(){
    this.avanza = 1;
  }
  down(){
    this.avanza = 2;
  }
  left(){
    this.gira = -1;
  }
  right(){
    this.gira = 1;
  }
  stopUp(){
    this.avanza = 0;
  }
  stopDown(){
    this.avanza = 0;
  }
  stopLeft(){
    this.gira = 0;
  }
  stopRight(){
    this.gira = 0;
  }
  
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


