
function getNeighbors(arr, x, y){
    var neighbours = [];
    if(arr[y-1] && arr[y-1][x]){
        neighbours.push(arr[y-1][x]);
    }
    if(arr[y+1] && arr[y+1][x]){
        neighbours.push(arr[y+1][x]);
    }
    if(arr[y][x-1]){
        neighbours.push(arr[y][x-1]);
    }
    if(arr[y][x+1]){
        neighbours.push(arr[y][x+1]);
    }
    return neighbours;
}

function getRandomElement(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}
