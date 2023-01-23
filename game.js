const FPS = 30;
let game = null;
class Game{
    constructor(window){
        this.level = new Level(8,8);
        this.window = window; //array con las lineas de texto para los emoji
        this.turno_jugador = true;
    }
    teclado(key){
        console.log(key)
        if(key == 38){
            this.level.player.keyInput("up");
        }
        else if(key == 40){
            this.level.player.keyInput("down");
        }
        else if(key == 37){
            this.level.player.keyInput("left");
        }
        else if(key == 39){
            this.level.player.keyInput("right");
        }
    }
    render(){
        for(let i = 0; i < this.level.map.length; i++){
            for(let j = 0; j < this.level.map[i].length; j++){
                if(this.level.map[i][j] == 0){
                    this.window[i].innerHTML += "⬛";
                }else if(this.level.map[i][j] == 1){
                    this.window[i].innerHTML += "🔳";
                }else if(this.level.map[i][j] == 2){
                    this.window[i].innerHTML += "🕳️";
                }
                else if (this.level.map[i][j] == 3){
                    this.window[i].innerHTML += "🧙🏻‍♂️";
                }
                else if (this.level.map[i][j] == 4){
                    this.window[i].innerHTML += "🐀";
                }
            }
        }
    }
}
function borrarCanvas(){
    canvas0.innerHTML = "";
    canvas1.innerHTML = "";
    canvas2.innerHTML = "";
    canvas3.innerHTML = "";
    canvas4.innerHTML = "";
    canvas5.innerHTML = "";
    canvas6.innerHTML = "";
    canvas7.innerHTML = "";
}
function inicializa(){
    let canvas0 = document.getElementById('canvas0');
    let canvas1 = document.getElementById('canvas1');
    let canvas2 = document.getElementById('canvas2');
    let canvas3 = document.getElementById('canvas3');
    let canvas4 = document.getElementById('canvas4');
    let canvas5 = document.getElementById('canvas5');
    let canvas6 = document.getElementById('canvas6');
    let canvas7 = document.getElementById('canvas7');
    
    let window = [canvas0,canvas1,canvas2,canvas3,canvas4,canvas5,canvas6,canvas7];
    
    let game = new Game(window);
    setInterval(function(){
        borrarCanvas()
        game.render();
    },1000/FPS);
    
    document.addEventListener("keydown", function(tecla){
        let key = tecla.keyCode;
        
        // if(tecla.keyCode == 38){
        //     game.teclado("up");
        // }
        // else if(tecla.keyCode == 40){
        //     player.down();
        // }
        // else if(tecla.keyCode == 37){
        //     player.left();
        // }
        // else if(tecla.keyCode == 39){
        //     player.right();
        // }
    if(game.turno_jugador){
        game.teclado(key)
    }
    });
}