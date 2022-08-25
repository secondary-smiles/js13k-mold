import { Grid } from "./grid";
import { gameData } from "../main";

async function initBoard(x: number, y: number, board: HTMLDivElement) {
  board.innerHTML = "";
  let boardArr = await initGrid(x, y, board);
  board.style.border = "0px";
  gameData.gridArr = boardArr;
}

async function initGrid(
  xnum: number,
  ynum: number,
  board: HTMLDivElement
): Promise<Array<Grid>> {
  let returnArr: Array<Grid> = [];
  for (let y = 0; y < ynum; y++) {
    board.innerHTML += `<div class='row' id='row-${y}'><div>`;
    let row = document.querySelector<HTMLDivElement>(`#row-${y}`)!;

    row.style.height = `${board.clientHeight / ynum}px`;

    for (let x = 0; x < xnum; x++) {
      row.innerHTML += `<div class='grid grid-dead' id='grid-${y}${x}'><div>`;
      let grid: Grid = {
        state: 0,
        x: x,
        y: y,
      };
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
    e.className = `grid ${next}`;
  });
}

export { initBoard, updateBoardStylesGlobal };
