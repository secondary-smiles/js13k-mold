import { gameData } from "../main";
import { gameState } from "../utils/board-interface";

type Vec2 = {
  x: number;
  y: number;
};

class Grid {
  public id: string;
  private _sIndex: number;
  private _prev: number;
  coord: Vec2;

  constructor(id: string, coord: Vec2) {
    this.id = id;
    this._sIndex = 0;
    this._prev = 0;
    this.coord = coord;
  }

  get state() {
    return this._sIndex;
  }

  set state(v: number) {
    this._prev = this.state;
    if (this.state != 0) {
      return;
    }
    this._sIndex = v;
    this.setHooks();
  }

  setHooks() {
    console.log(
      `Grid - ${this.id} has been state changed to ${this.state} from ${this._prev}`
    );
    this.gridSetColor(this.state);
  }

  gridSetColor(v: number) {
    let ob = document.querySelector<HTMLDivElement>("#" + this.id)!;
    switch (v) {
      case 0:
        ob.style.background = "transparent";
        break;
      case 1:
        ob.style.background = "#8CFFB3";
        break;
      case 2:
        ob.style.background = "#5AC7FF";
        break;
      case 3:
        ob.style.background = "#FFE680";
        break;
      case 4:
        ob.style.background = "#000000";
        break;
      default:
        break;
    }
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
