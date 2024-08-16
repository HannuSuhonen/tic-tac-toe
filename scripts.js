const gameboad = (function createGameboard(){
    let gameBoardTiles = [["1","","1"],["2","","2"],["1","","1"]]
    return{
        gameBoardTiles,
    }
})();

function checkRows(){
    const { gameBoardTiles } = gameboad;
    for(let i = 0; i < gameBoardTiles.length; i++){
        if(checkForThreeMatch(gameBoardTiles[i]) === true){
            return true;
        }
    }
    return false;
}

function checkColumns(){
    const { gameBoardTiles } = gameboad;
    const column = gameBoardTiles.map((arr) => arr[1]);
    return checkForThreeMatch(column);
}

function checkDiagonal(){
    const { gameBoardTiles } = gameboad;
    const diag1 = gameBoardTiles.map((row, index) => row[index]);
    const diag2 = gameBoardTiles.map((row, index) => row[gameBoardTiles.length - 1 - index]);

    return checkForThreeMatch(diag1) || checkForThreeMatch(diag2);
}

function checkForThreeMatch(arr){
    var k = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if(k!==arr[i]){
            return false;
        }
    }
    return true;
}