const tileContainer = document.querySelector(".tiles");
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorsPickList = colors.concat(colors);
const tileCount = colorsPickList.length;

// Game State

let revealedCount = 0;
let activeTile = null; // refers to the tile the user just clicked on
let awaitngEndOfMove = false; 



// Build up TIles

for (let i = 0; i < tileCount; i++) {
const randomIndex = Math.floor(Math.random() * colorsPickList.length);
const color = colorsPickList[randomIndex];

}