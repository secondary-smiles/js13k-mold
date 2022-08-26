import { gameData } from "../main";
import { gameState } from "../utils/board-interface";
import { State } from "./states/state";

type Vec2 = {
  x: number;
  y: number;
};

class Grid {
  public id: string;
  private _sIndex: State;
  private _prev: number;
  coord: Vec2;

  constructor(id: string, coord: Vec2) {
    this.id = id;
    this._prev = 0;
    this.coord = coord;
    this._sIndex = new State(0, this.id);
  }

  get state() {
    return this._sIndex.index;
  }

  set state(v: number) {
    this._prev = this.state;
    if (this.state != 0) {
      gameState.switchP();
      return;
    }
    this._sIndex.index = v;
    this.setHooks();
  }

  setHooks() {
    console.log(
      `${this.id} has been state changed to ${this.state} from ${this._prev}`
    );
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
  grid.state = gameState.switchP();
}

export { Grid, initAddGridListeners, initRemoveGridListeners, findGridItem };
export type { Vec2 };
