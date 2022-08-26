import { initBoard, updateBoardStylesGlobal } from "../game/board";
import { updatePlayerGlobal } from "../game/player";

let gameState = {
  state: false,
  player: 2,
  setHooks() {
    updatePlayerGlobal(this).then();
    updateBoardStylesGlobal(this);
  },
  get running() {
    return this.state;
  },
  set running(v: boolean) {
    this.state = v;
    this.setHooks();
  },

  switchP(): number {
    switch (this.player) {
      case 2:
        this.player = 3;
        break;
      case 3:
        this.player = 2;
        break;
    }
    return this.player;
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
