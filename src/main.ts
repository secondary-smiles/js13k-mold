import "./style/style.css";

import { initButtons } from "./utils/board-interface";
import { Game } from "./utils/game-globals";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div id="sub-app">
  <div id="board-holder">
    <div id="board"></div>
  </div>
  <button class="board-interface" id="start">Start</button>
  <button class="board-interface" id="stop">Stop</button>
</div>
`;

let gameData: Game = {
  globalx: 40,
  globaly: 40,
  board: document.querySelector<HTMLDivElement>("#board")!,
  gridArr: undefined,
  mold: undefined,
};

initButtons();

console.log("Main finished.");

export { gameData };
