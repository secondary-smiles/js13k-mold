import "./style/style.css";

import { initButtons } from "./utils/board-interface";
import { initPrefs } from "./prefs";

import { Game } from "./utils/game-globals";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div id="sub-app">
  <div id="board-holder">
    <div id="board"></div>
  </div>
</div>
  <button class="board-interface" id="start">Start</button>
  <button class="board-interface" id="stop">Stop</button>
  <button id="show-prefs">Preferences</button>
  <div id="prefs" ></div>
`;

let gameData: Game = {
  globalx: 50,
  globaly: 50,
  board: document.querySelector<HTMLDivElement>("#board")!,
  gridArr: undefined,
  mold: undefined,
  attractor: undefined,
  walls: undefined,
  prefs: undefined,
};

initPrefs().then();
initButtons();

export { gameData };
