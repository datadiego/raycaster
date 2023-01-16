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