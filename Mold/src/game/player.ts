import { gameData } from "../main";
import { initAddGridListeners, initRemoveGridListeners } from "./grid";

async function updatePlayerGlobal(stateObj: any) {
  switch (stateObj.state) {
    case true:
      gameData.board.style.cursor = "url('/cursor.png'), auto";
      await initAddGridListeners();
      break;
    default:
      gameData.board.style.cursor = "auto";
      await initRemoveGridListeners();
      break;
  }
}

export { updatePlayerGlobal };
