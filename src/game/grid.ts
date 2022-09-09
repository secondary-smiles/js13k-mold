import { gameData } from "../main";
import { gameState } from "../utils/board-interface";
import { State } from "./states/state";

class Vec2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(n: Array<number>): Vec2 {
    return new Vec2(this.x + n[0], this.y + n[1]);
  }
}

class Grid {
  public id: string;
  private _sIndex: State;
  coord: Vec2;
  n_opacity: number;

  constructor(id: string, coord: Vec2) {
    this.id = id;
    this.coord = coord;
    this._sIndex = new State(0, this.id);
    this.n_opacity = 1;
  }

  get opacity() {
    return this.n_opacity;
  }

  set opacity(v: number) {
    this.n_opacity = v;
    let el = document.getElementById(this.id);
    if (el) {
      el.style.opacity = v.toString();
    }
  }

  get state() {
    return this._sIndex.index;
  }

  set state(v: number) {
    if (this.state != 0 && v != 0) {
      return;
    }
    this._sIndex.index = v;
    if (v == 2 || v == 3) {
      gameState.switchP();
    }
    this.setHooks();
  }

  setHooks() {
  }

  surrounding(): Array<Grid> {
    let returnArr: Array<Grid> = [];
    const surroundingMath = [
      [-1, -1],
      [0, -1],
      [1, -1],
      [-1, 0],
      [1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
    ];
    surroundingMath.forEach((n) => {
      let coords = this.coord.add(n);
      let gridIndex = findGridItem(`grid-${coords.x}-${coords.y}`);
      if (gridIndex > -1) {
        returnArr.push(gameData.gridArr![gridIndex]);
      }
    });
    return returnArr;
  }

  distanceTo(g: Grid): number {
    return Math.sqrt(Math.pow(this.coord.x - g.coord.x, 2) + Math.pow(this.coord.y - g.coord.y, 2));
  }
}

function findGridItem(id: string): number {
  for (let i = 0; i < gameData.gridArr!.length; i++) {
    let e = gameData.gridArr![i];
    if (e.id == id) {
      return i;
    }
  }
  return -1;
}

function initAddGridListeners() {
  const objects = document.querySelectorAll(".grid");
  objects.forEach((o) => {
    o.addEventListener("click", updateGridState);
  });
}

async function initRemoveGridListeners() {
  const objects = document.querySelectorAll(".grid");
  objects.forEach((o) => {
    o.removeEventListener("click", updateGridState);
  });
}

function updateGridState(e: Event) {
  // @ts-ignore
  let gridInd = findGridItem(e.target!.id);
  let grid = gameData.gridArr![gridInd];
  grid.state = gameState.player;
  switch (gameState.player) {
    // Reversed because of GameState switchP()
    case 2:
      gameData.repeller!.occupied.push(grid);
      break;
    case 3:
      gameData.attractor!.occupied.push(grid);
      break;
  }
}

export {
  Grid,
  Vec2,
  initAddGridListeners,
  initRemoveGridListeners,
  findGridItem,
};
