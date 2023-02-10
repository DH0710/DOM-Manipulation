const tileContainer = document.querySelector(".tiles");
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorsPickList = colors.concat(colors);
const tileCount = colorsPickList.length;

// Game State

let revealedCount = 0;
let activeTile = null; // refers to the tile the user just clicked on
let awaitingEndOfMove = false; 

// builds a new tile element then return it 
buildTile = (color) => {
const element = document.createElement("div");

element.classList.add("tile");
element.setAttribute("data-color", color);

element.addEventListener("click", () => {
    if (awaitingEndOfMove) {
        return;
    }

    element.style.backgroundColor = color;

    if(!activeTile) {
        activeTile = element;

        return;
    }

    const colorToMatch = activeTile.getAttribute("data-color");

    if (colorToMatch === color) {
        activeTile = null;
        awaitingEndOfMove = false;
    }

    awaitingEndOfMove = true;

    setTimeout(() => {
        element.style.backgroundColor = null;
        activeTile.style.backgroundColor = null;

        awaitingEndOfMove = false;
        activeTile = null;


    }, 1000);


    console.log(activeTile);

});




return element;



}


// Build up TIles

for (let i = 0; i < tileCount; i++) {
const randomIndex = Math.floor(Math.random() * colorsPickList.length);
const color = colorsPickList[randomIndex];

const tile = buildTile(color);

colorsPickList.splice(randomIndex,1); // will make sure  
// the randomized array doesnt choose the same color more than 2 times
console.log(color);
tileContainer.appendChild(tile);

}