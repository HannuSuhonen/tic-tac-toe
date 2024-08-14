const gameboadContainer = document.querySelector(".gameboard");
const gameboad = (function createGameboard(doc){
    let gameBoardTiles = []
    for(let i = 0; i < 9; i++){
        const gridElement = doc.createElement("div");
        gridElement.textContent = i;
        gameboadContainer.appendChild(gridElement);
        gameBoardTiles.push(gridElement)
    }
    return{
        gameBoardTiles,
    }
})(document);

gameboad.gameBoardTiles.forEach((element,index) => {
    element.addEventListener("click",() => {
        element.textContent = "Clicked!"
        console.log(index);
    })
});