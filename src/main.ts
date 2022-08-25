import './style.css';

import {initBoard} from "./game/board";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="board-holder">
    <div id="board"></div>
  </div>
`;

initBoard(10, 10, document.querySelector<HTMLDivElement>('#board')!).then();