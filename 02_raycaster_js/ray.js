class Ray{
    constructor(con, escenario, columna, x, y, anguloJugador, incrementoAngulo){
    this.ctx = con;
    this.level = escenario;
    this.col = columna
    this.x = x;
    this.y = y;
    this.anguloJugador = anguloJugador;
    this.incrementoAngulo = incrementoAngulo;

    this.wallHitX = 0;
    this.wallHitY = 0;
    
    this.wallHitXHorizontal = 0;
    this.wallHitYHorizontal = 0;
    
    this.wallHitXVertical = 0;
    this.wallHitYVertical = 0;
    
    }
  
    cast(){
    this.xIntercept = 0;
    this.yIntercept = 0;
    this.xStep = 0;
    this.yStep = 0;
    
    // Sacamos la direccion del rayo
    this.abajo = false;
    this.arriba = false;
    if(this.anguloJugador < Math.PI){
      this.abajo = true;
    }
    if (this.anguloJugador > Math.PI/2 && this.anguloJugador < (3*Math.PI)/2){
      this.izquierda = true;
    }

    // Calculamos el punto de interseccion con la pared horizontal
    let choqueHorizontal = false;
    this.yIntercept = Math.floor(this.y / this.level.altoTile) * this.level.altoTile;
    if(this.abajo){
        this.yIntercept += this.level.altoTile;
    }
    let adyacente = this.x + (this.y - this.yIntercept) / Math.tan(this.anguloJugador); //Aqui podemos tener un problema
    this.xIntercept = this.x + adyacente;

    // Calculamos la distancia de cada paso horizontal
    this.yStep = this.level.altoTile;
    this.xStep = this.level.altoTile / Math.tan(this.anguloJugador);

    //Si vamos hacia arriba invertimos el paso y
    if(!this.abajo){
      this.yStep *= -1;
      this.xStep *= -1;
    }

    //Comprobamos el paso x
    if((this.izquierda && this.xStep > 0) || (!this.izquierda && this.xStep < 0)){
        this.xStep *= -1;
    }

    let nextX = this.xIntercept;
    let nextY = this.yIntercept;

    //Si apunta arriba, resto un pixel para forzar la colision
    if(!this.abajo){
      nextY--;
    }


    //Buscamos punto de colision
    while(!choqueHorizontal){
    let x_aux = parseInt(nextX / this.level.anchoTile);
    let y_aux = parseInt(nextY / this.level.altoTile);
    if(this.level.colision(x_aux, y_aux)){
      choqueHorizontal = true;
      this.wallHitXHorizontal += nextX;
      this.wallHitYHorizontal += nextY;
    }
    else{
        nextX += this.xStep;
        nextY += this.yStep;
        }
    }
    }
setAngulo(angulo){
    this.anguloJugador = normalizarAngulo(angulo);
}
dibuja(){
    this.cast();
    let xDestino = this.wallHitXHorizontal;
    let yDestino = this.wallHitYHorizontal;

    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(xDestino, yDestino);
    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
    this.ctx.closePath();
    }
}
  