class Player{
    constructor(nivel){
        this.x = 1;
        this.y = 1;
        this.nivel = nivel;
    }
    up(){
        if(this.nivel.mapa[this.y-1][this.x] == 2){
            this.y -= 1;
            this.nivel.nuevo_mapa();
        }
        if(this.y > 0 && this.nivel.mapa[this.y - 1][this.x] != 1){
            this.nivel.mapa[this.y][this.x] = 0;
            this.y -= 1;
        }
    }
    down(){
        if(this.nivel.mapa[this.y+1][this.x] == 2){
            this.y += 1;
            this.nivel.nuevo_mapa();
        }
        if(this.y < this.nivel.mapa.length - 1 && this.nivel.mapa[this.y + 1][this.x] != 1){
            this.nivel.mapa[this.y][this.x] = 0;
            this.y += 1;
        }
    }
    left(){
        if(this.nivel.mapa[this.y][this.x-1] == 2){
            this.x -= 1;
            this.nivel.nuevo_mapa();
        }
        if(this.x > 0 && this.nivel.mapa[this.y][this.x - 1] != 1){
            this.nivel.mapa[this.y][this.x] = 0;
            this.x -= 1;
        }
    }
    right(){
        if(this.nivel.mapa[this.y][this.x+1] == 2){
            this.x += 1;
            this.nivel.nuevo_mapa();
        }
        if(this.x < this.nivel.mapa[0].length - 1 && this.nivel.mapa[this.y][this.x + 1] != 1){
            this.nivel.mapa[this.y][this.x] = 0;
            this.x += 1;
        }
    }
    dibuja(){
        this.nivel.mapa[this.y][this.x] = 3;
        this.nivel.dibuja();
    }
}