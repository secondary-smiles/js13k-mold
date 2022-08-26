import { Grid } from "./grid";
import { gameData } from "../main";

async function initBoard() {
  gameData.board.innerHTML = "";
  let boardArr = await initGrid();
  // gameData.board.style.border = "0px";
  gameData.gridArr = boardArr;
}

async function initGrid(): Promise<Array<Grid>> {
  let returnArr: Array<Grid> = [];
  for (let y = 0; y < gameData.globaly; y++) {
    gameData.board.innerHTML += `<div class='row' id='row-${y}'><div>`;
    let row = document.querySelector<HTMLDivElement>(`#row-${y}`)!;

    row.style.height = `${gameData.board.clientHeight / gameData.globaly}px`;

    for (let x = 0; x < gameData.globalx; x++) {
      const id = `grid-${x}-${y}`;
      row.innerHTML += `<div class='grid grid-dead' id='${id}'><div>`;
      let grid = new Grid(id, { x, y });
      returnArr.push(grid);
    }
  }
  return returnArr;
}

function updateBoardStylesGlobal(stateObj: any) {
  switch (stateObj.state) {
    case true:
      updateClassName("grid-dead", "grid-active");
      break;
    default:
      updateClassName("grid-active", "grid-dead");
      break;
  }
}

function updateClassName(current: string, next: string) {
  let list = document.getElementsByClassName(current);
  Array.from(list).forEach(function (e) {
    e.className = e.className.replace(current, next);
  });
}

export { initBoard, updateBoardStylesGlobal };
