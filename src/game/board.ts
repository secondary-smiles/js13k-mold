import { Grid } from "./grid";

async function initBoard(
  x: number,
  y: number,
  board: HTMLDivElement
): Promise<Array<Grid>> {
  board.innerHTML = "";
  let boardArr = await initGrid(x, y, board);
  board.style.border = "0px";
  return boardArr;
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
      row.innerHTML += `<div class='grid' id='grid-${y}${x}'><div>`;
      const obj = document.querySelector<HTMLDivElement>(`#grid-${x}`)!;
      let grid: Grid = {
        state: 0,
        x: x,
        y: y,
        obj: obj,
      };
      returnArr.push(grid);
    }
  }
  return returnArr;
}

export { initBoard };
