import { gameData } from "../main";

type Grid = {
  state: number;
  x: number;
  y: number;
  obj: HTMLDivElement;
};

async function initAddGridListeners() {
  if (!gameData.gridArr) {
    return;
  }
  gameData.gridArr.forEach((item) => {
    console.log(item);
    item.obj.addEventListener("click", handleGridState);
  });
}

async function initRemoveGridListeners() {
  if (!gameData.gridArr) {
    return;
  }
  gameData.gridArr.forEach((item) => {
    console.log(item);
    item.obj.removeEventListener("click", handleGridState);
  });
}

function handleGridState(evt: any) {
  console.log("test")
  console.log(evt);
}

export { initAddGridListeners, initRemoveGridListeners };
export type { Grid };
