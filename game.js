const FPS = 30;
class Game{
    constructor(window){
        this.level = new Level(6,6);
        this.window = window; //array con las lineas de texto para los emoji
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
}
function inicializa(){
    let canvas0 = document.getElementById('canvas0');
    let canvas1 = document.getElementById('canvas1');
    let canvas2 = document.getElementById('canvas2');
    let canvas3 = document.getElementById('canvas3');
    let canvas4 = document.getElementById('canvas4');
    let canvas5 = document.getElementById('canvas5');

    let window = [canvas0,canvas1,canvas2,canvas3,canvas4,canvas5];

    let game = new Game(window);
    setInterval(function(){
        borrarCanvas()
        game.render();
    },1000/FPS);

}