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

    let window = [canvas0,canvas1,canvas2,canvas3,canvas4,canvas5];

    setInterval(function(){
        borrarCanvas()
        render();
    },1000/FPS);
    nivel = new Level(window);
    player = new Player(nivel);

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
function render(){
    
    player.dibuja();
    nivel.dibuja();
}


class Rat{
    constructor(nivel, x, y){
        this.x = x;
        this.y = y;
        this.health = 1;
        this.nivel = nivel;
        this.nivel.mapa[this.y][this.x] = 4;
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