const gameboad = (function createGameboard(){
    let gameBoardTiles = [["1","2","3"],["1","2","6"],["6","6","6"]]
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
    for(let i = 0; i < gameBoardTiles.length; i++){
        let column =  gameBoardTiles.map((arr) => arr[i]);
        if(checkForThreeMatch(column)) return true;
    }
    return false;
}

function checkDiagonal(){
    const { gameBoardTiles } = gameboad;
    const diag1 = gameBoardTiles.map((row, index) => row[index]);
    const diag2 = gameBoardTiles.map((row, index) => row[gameBoardTiles.length - 1 - index]);

    return checkForThreeMatch(diag1) || checkForThreeMatch(diag2);
}

function checkForThreeMatch(arr){
    if (arr.length === 0 || arr[0] == null || arr[0] === "") {
        return false;
    }
    return arr.every(element => element === arr[0]);
}