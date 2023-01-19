class Player{
    constructor(con, escenario, x, y){
      this.ctx = con; //contexto
      this.level = escenario;
      this.x = x;
      this.y = y;
      this.avanza = 0; //0: no avanza, 1: avanza, 2: retrocede
      this.gira = 0; //0: no gira, 1: gira a la derecha, 2: gira a la izquierda
      this.rotacion = 6; //angulo de rotacion
      this.velocidadMovimiento = 3; //velocidad
      this.velocidadGiro = 3*(Math.PI/180); //velocidad de rotacion en grados, 3 grados
      this.rayo = new Ray(this.ctx, this.level, 0, this.x, this.y, this.rotacion, this.velocidadGiro);
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
      

    }
  
    dibuja(){
        this.actualiza();
        this.rayo.setAngulo(this.rotacion)
        this.rayo.x = this.x;
        this.rayo.y = this.y;
        this.rayo.dibuja();

        this.ctx.fillStyle = "red";
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