
function cheakGameboardWinState(gridItems){
    const gameBoardTiles = [];
    let winner = "";
    const gridItemsTexts = Array.from(gridItems, (element) => {
        return element.textContent;
    });

    for (let i = 0; i < gridItemsTexts.length; i += 3) {
        gameBoardTiles.push(gridItemsTexts.slice(i, i + 3));
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
        let threeMatchBool = arr.every((element) => element === arr[0]);
        if(threeMatchBool) winner = arr[0];

        return threeMatchBool;
    }
    const getWinner = () => winner;
    const checkDraw = () => gridItemsTexts.every((element) => element !== "")
    
    return{
        checkwin : checkRows() || checkColumns() || checkDiagonal(),
        getWinner,
        checkDraw
    }
};

function initializeGame(gridItems){
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
            const gameboad = cheakGameboardWinState(gridItems);

            if(gameboad.checkwin === true){
                setTimeout(() => {
                    alert(`${gameboad.getWinner()} wins!`)
                    gridItems.forEach((element) => element.textContent = "");
                    firstPlayerTurn = true;
                },0)
            }else if(gameboad.checkDraw()){
                alert("Draw!")
                gridItems.forEach((element) => element.textContent = "");
            }
        });
    });
}

const gridItems = document.querySelectorAll(".grid");
initializeGame(gridItems);