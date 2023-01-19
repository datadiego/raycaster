const suelo = ["🌱","☘️","🌷","🌱","🌿","🌾","🍃","🍂","🌷","🌼","🌻"]
const FPS = 30;
function borrarCanvas(){
    canvas0.innerHTML = "";
    canvas1.innerHTML = "";
    canvas2.innerHTML = "";
    canvas3.innerHTML = "";
    canvas4.innerHTML = "";
    canvas5.innerHTML = "";
}
function inicializa(){
    let canvas0 = document.getElementById('canvas0');
    let canvas1 = document.getElementById('canvas1');
    let canvas2 = document.getElementById('canvas2');
    let canvas3 = document.getElementById('canvas3');
    let canvas4 = document.getElementById('canvas4');
    let canvas5 = document.getElementById('canvas5');
    let window = [canvas0,canvas1,canvas2,canvas3,canvas4,canvas5]
    setInterval(function(){
        borrarCanvas()
        player.dibuja();
    },1000/FPS);
    // canvas0.innerHTML = "🌲🌲🌲🌲🌲🌲🌲🌲";
    // window[0].innerHTML = "🌲🌲🌲🌲🌲🌲🌲🌲";
    nivel = new Level(window);
    player = new Player(nivel);
    player.dibuja();
}
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
        for (let i = 0; i < 6; i++) {
            this.mapa[i] = []
            for (let j = 0; j < 6; j++) {
                this.mapa[i][j] = Math.random() > 0.2 ? 0 : 1;
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
                    this.window[i].innerHTML += "🧛🏻";
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