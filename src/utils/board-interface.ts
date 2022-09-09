import { initBoard, updateBoardStylesGlobal } from "../game/board";
import { updatePlayerGlobal } from "../game/player";
import { moldLoop } from "./mold-loop";
import { gameData } from "../main";

let gameState = {
  state: false,
  player: 2,
  get running() {
    return this.state;
  },
  set running(v: boolean) {
    this.state = v;
    this.setHooks();
  },

  setHooks() {
    updatePlayerGlobal(this).then();
    updateBoardStylesGlobal(this);

    if (this.running) {
      moldLoop(1).then();
    }
    if (!this.running) {
      gameData.gridArr!.forEach((grid) => {
        grid.opacity = 1;
      });
    }
  },
};

function initButtons() {
  let startButton = document.querySelector<HTMLButtonElement>("#start")!;
  let stopButton = document.querySelector<HTMLButtonElement>("#stop")!;
  stopButton.style.display = "none";

  startButton.addEventListener("click", async () => {
    stopButton.style.display = "inline";
    startButton.style.display = "none";
    await initBoard();
    gameState.running = true;
  });

  stopButton.addEventListener("click", async () => {
    stopButton.style.display = "none";
    startButton.style.display = "inline";
    gameState.running = false;
  });
}

export { gameState, initButtons };
