import "./style/style.css";

import { initButtons } from "./utils/board-interface";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div id="sub-app">
  <div id="board-holder">
    <div id="board"></div>
  </div>
  <button class="board-interface" id="start">Start</button>
  <button class="board-interface" id="stop">Stop</button>
</div>
`;

const globalx = 40;
const globaly = 40;

const board = document.querySelector<HTMLDivElement>("#board")!;
initButtons();

export { globaly, globalx, board };
