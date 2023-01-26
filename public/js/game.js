const FPS = 30;
let game = null;
let pasos = 0;
let nivel = 0;
class Game{
    constructor(cells, marcador_vida, marcador_nivel){
        this.level = new Level(8,8);
        this.turno_jugador = true;
        this.grid = cells;
        this.turns = 0;
        this.marcador_vida = marcador_vida;
        this.marcador_nivel = marcador_nivel;
    }
    teclado(key){
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
                    this.grid[i][j].innerHTML = "🟫";
                    
                }else if(this.level.map[i][j] == 1){
                    this.grid[i][j].innerHTML = "🌳";
                }else if(this.level.map[i][j] == 2){
                    this.grid[i][j].innerHTML = "🕳️";
                }
                else if (this.level.map[i][j] == 3){
                    this.grid[i][j].innerHTML = "🧙🏻‍♂️";
                }
                else if (this.level.map[i][j] == 4){
                    this.grid[i][j].innerHTML = "🌀";
                }
                else if (this.level.map[i][j] == 5){
                    this.grid[i][j].innerHTML = "🐁";
                }
            }
        }
        this.marcador_nivel.innerHTML = "Nivel: " + nivel;
        this.marcador_vida.innerHTML = "Vida: ";
        for(let i = 0; i < this.level.player.health; i++){
            this.marcador_vida.innerHTML += "❤️";
        }
    }
}

function inicializa(){
    let square1 = document.getElementById('square-1')
    let square2 = document.getElementById('square-2')
    let square3 = document.getElementById('square-3')
    let square4 = document.getElementById('square-4')
    let square5 = document.getElementById('square-5')
    let square6 = document.getElementById('square-6')
    let square7 = document.getElementById('square-7')
    let square8 = document.getElementById('square-8')
    let square9 = document.getElementById('square-9')
    let square10 = document.getElementById('square-10')
    let square11 = document.getElementById('square-11')
    let square12 = document.getElementById('square-12')
    let square13 = document.getElementById('square-13')
    let square14 = document.getElementById('square-14')
    let square15 = document.getElementById('square-15')
    let square16 = document.getElementById('square-16')
    let square17 = document.getElementById('square-17')
    let square18 = document.getElementById('square-18')
    let square19 = document.getElementById('square-19')
    let square20 = document.getElementById('square-20')
    let square21 = document.getElementById('square-21')
    let square22 = document.getElementById('square-22')
    let square23 = document.getElementById('square-23')
    let square24 = document.getElementById('square-24')
    let square25 = document.getElementById('square-25')
    let square26 = document.getElementById('square-26')
    let square27 = document.getElementById('square-27')
    let square28 = document.getElementById('square-28')
    let square29 = document.getElementById('square-29')
    let square30 = document.getElementById('square-30')
    let square31 = document.getElementById('square-31')
    let square32 = document.getElementById('square-32')
    let square33 = document.getElementById('square-33')
    let square34 = document.getElementById('square-34')
    let square35 = document.getElementById('square-35')
    let square36 = document.getElementById('square-36')
    let square37 = document.getElementById('square-37')
    let square38 = document.getElementById('square-38')
    let square39 = document.getElementById('square-39')
    let square40 = document.getElementById('square-40')
    let square41 = document.getElementById('square-41')
    let square42 = document.getElementById('square-42')
    let square43 = document.getElementById('square-43')
    let square44 = document.getElementById('square-44')
    let square45 = document.getElementById('square-45')
    let square46 = document.getElementById('square-46')
    let square47 = document.getElementById('square-47')
    let square48 = document.getElementById('square-48')
    let square49 = document.getElementById('square-49')
    let square50 = document.getElementById('square-50')
    let square51 = document.getElementById('square-51')
    let square52 = document.getElementById('square-52')
    let square53 = document.getElementById('square-53')
    let square54 = document.getElementById('square-54')
    let square55 = document.getElementById('square-55')
    let square56 = document.getElementById('square-56')
    let square57 = document.getElementById('square-57')
    let square58 = document.getElementById('square-58')
    let square59 = document.getElementById('square-59')
    let square60 = document.getElementById('square-60')
    let square61 = document.getElementById('square-61')
    let square62 = document.getElementById('square-62')
    let square63 = document.getElementById('square-63')
    let square64 = document.getElementById('square-64')
    
    let marcador_vida = document.getElementById('marcador_vida')
    let marcador_nivel = document.getElementById('marcador_nivel')
    let squares = [
        [square1,square2,square3,square4,square5,square6,square7,square8],
        [square9,square10,square11,square12,square13,square14,square15,square16],
        [square17,square18,square19,square20,square21,square22,square23,square24],
        [square25,square26,square27,square28,square29,square30,square31,square32],
        [square33,square34,square35,square36,square37,square38,square39,square40],
        [square41,square42,square43,square44,square45,square46,square47,square48],
        [square49,square50,square51,square52,square53,square54,square55,square56],
        [square57,square58,square59,square60,square61,square62,square63,square64]
    ]
    
    
    let game = new Game(squares, marcador_vida, marcador_nivel);
    setInterval(function(){
        game.render();
    },1000/FPS);
    
    document.addEventListener("keydown", function(tecla){
        let key = tecla.keyCode;
    if(game.turno_jugador){
        game.teclado(key)
    }
    });
}