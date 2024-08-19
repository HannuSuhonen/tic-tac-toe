const gameboad = (function createGameboard(doc){
    const gameBoardTiles = [];
    const gridItems = doc.querySelectorAll(".grid");
    Array.from(gridItems).forEach((element) => {
        gameBoardTiles.push(element);
    })
    while(gridItems.length){
        gameBoardTiles.push(gridItems.splice(0,3));
    } 
    console.log(gameBoardTiles);

    function checkRows() {
        for(let i = 0; i < gameBoardTiles.length; i++){
            if(checkForThreeMatch(gameBoardTiles[i]) === true){
                return true;
            }
        }
        return false;
    }

    function checkColumns() {
        for(let i = 0; i < gameBoardTiles.length; i++){
            let column =  gameBoardTiles.map((arr) => arr[i]);
            if(checkForThreeMatch(column)) return true;
        }
        return false;
    }

    function checkDiagonal() {
        const diag1 = gameBoardTiles.map((row, index) => row[index]);
        const diag2 = gameBoardTiles.reverse().map((row, index) => row[index]);
        return checkForThreeMatch(diag1) || checkForThreeMatch(diag2);
    }

    function checkForThreeMatch(arr){
        if (arr.length === 0 || arr[0] == null || arr[0] === "") {
            return false;
        }
        return arr.every(element => element === arr[0]);
    }

    return{
        checkwin : checkRows() || checkColumns() || checkDiagonal(),
    }
})(document);

