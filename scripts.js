const gameboad = (function createGameboard(){
    let gameBoardTiles = [["x","","x"],["x","","x"],["x","x","x"]]


    checkRows(gameBoardTiles);

    return{
        gameBoardTiles,
    }
})();

function checkRows(gameBoardTiles){
    for (const row in gameBoardTiles) {
        checkForThreeMatch(row);
    }
}

function checkForThreeMatch(arr){
    var k = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if(k!==arr[i]){
            return false;
        }
    }
    console.log("x found!")
    return true;
}

function checkColumns(){
    let gameBoardTiles = [["1","2","3"],["4","5","6"],["7","8","9"]]

    let x = gameBoardTiles.flat().map(arr => arr[0]);

    console.log(gameBoardTiles.flat());
}