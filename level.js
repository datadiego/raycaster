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