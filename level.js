class Level{
    constructor(window){
        this.mapa = [
            [0,0,0,6,0,0],
            [0,0,0,1,4,0],
            [0,1,0,0,0,0],
            [0,0,0,1,0,0],
            [0,0,0,1,2,0],
            [0,0,5,1,0,0],
              
        ]
        this.nuevo_mapa();
        console.log(this.mapa.length)
        this.window = window;
    }
    nuevo_mapa(){
        this.mapa = []
        let rat_amount = 2;
        for (let i = 0; i < 6; i++) {
            this.mapa[i] = []
            for (let j = 0; j < 6; j++) {
                this.mapa[i][j] = Math.random() > 0.2 ? 0 : 1;
                if(rat_amount > 0){
                    if(Math.random() > 0.8){
                        this.mapa[i][j] = 4;
                        rat_amount--;
                    }
                }
            }
        }
        this.coloca_salida();
    }

    coloca_salida(){
        let pos_x = Math.floor(Math.random() * this.mapa[0].length);
        let pos_y = Math.floor(Math.random() * this.mapa.length);
        this.mapa[pos_y][pos_x] = 2;
    }
    dibuja(){
        for (let i = 0; i < this.mapa.length; i++) {
            for (let j = 0; j < this.mapa[i].length; j++) {
                if(this.mapa[i][j] == 0){
                    this.window[i].innerHTML += "⬛";
                }else if(this.mapa[i][j] == 1){
                    this.window[i].innerHTML += "🔳";
                }else if(this.mapa[i][j] == 2){
                    this.window[i].innerHTML += "🕳️";
                }
                else if (this.mapa[i][j] == 3){
                    this.window[i].innerHTML += "🧙🏻‍♂️";
                }
                else if (this.mapa[i][j] == 4){
                    this.window[i].innerHTML += "🐀";
                }
                else if (this.mapa[i][j] == 5){
                    this.window[i].innerHTML += "🧟‍♂️";
                }
                else if (this.mapa[i][j] == 6){
                    this.window[i].innerHTML += "🕷️";
                }
            }
        }
    }
}