const gridItems = document.querySelectorAll(".grid");

function cheakGameboardWinState(){
    const gameBoardTiles = [];
    let winner = "";
    const gridItemsTexts = Array.from(gridItems, (element) => {
        return element.textContent;
    });

    while(gridItemsTexts.length){
        gameBoardTiles.push(gridItemsTexts.splice(0,3));
    } 
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
        return arr.every((element) => {
            winner = arr[0];
            return element === arr[0]
        });
    }
    const getWinner = () => winner;
    return{
        checkwin : checkRows() || checkColumns() || checkDiagonal(),
        getWinner,
    }
};

let firstPlayerTurn = true;
gridItems.forEach((element) => {
    element.addEventListener(("click"),() => {
        if(element.textContent === "" && firstPlayerTurn){
            element.textContent = "X";
            firstPlayerTurn = false;
        }else if(element.textContent !== "X"){
            element.textContent = "O";
            firstPlayerTurn = true;
        }

        const gameboad = cheakGameboardWinState();
        if(gameboad.checkwin === true){
            alert(`${gameboad.getWinner()} wins!`)
            gridItems.forEach((element) => element.textContent = "");
        }
    })

})