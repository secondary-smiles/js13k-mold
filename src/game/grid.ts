type Vec2 = {
  x: number;
  y: number;
};

class Grid {
  public id: string;
  private _sIndex: number;
  coord: Vec2;

  constructor(id: string, coord: Vec2) {
    this.id = id;
    this._sIndex = 0;
    this.coord = coord;
  }
}

function findGridItem(id: string): number {}

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
  const coordRe = /[0-9]+/g;
  let coords = e.target!.id.match(coordRe);
  console.log(e.target!.id, coords);
}

export { Grid, initAddGridListeners, initRemoveGridListeners, findGridItem };
export type { Vec2 };
