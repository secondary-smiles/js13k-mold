import { board, globalx, globaly } from "../main";
import { initBoard } from "../game/board";
import {updatePlayerGlobal} from "../game/player";

let gameState = {
  state: false,
  setHooks() {
    updatePlayerGlobal(this);
  },
  get running() {
    return this.state;
  },
  set running(v: boolean) {
    this.state = v;
    this.setHooks();
  },
};

function initButtons() {
  let startButton = document.querySelector<HTMLButtonElement>("#start")!;
  let stopButton = document.querySelector<HTMLButtonElement>("#stop")!;
  stopButton.style.display = "none";

  startButton.addEventListener("click", async () => {
    gameState.running = true;
    stopButton.style.display = "inline";
    startButton.style.display = "none";
    await initBoard(globalx, globaly, board);
  });

  stopButton.addEventListener("click", async () => {
    gameState.running = false;
    stopButton.style.display = "none";
    startButton.style.display = "inline";
  });
}

export { gameState, initButtons };
