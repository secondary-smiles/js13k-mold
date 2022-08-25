import { gameData } from "../main";
import { initBoard } from "../game/board";
import { updatePlayerGlobal } from "../game/player";
import { updateBoardStylesGlobal } from "../game/board";

let gameState = {
  state: false,
  player: 0,
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
};

function initButtons() {
  let startButton = document.querySelector<HTMLButtonElement>("#start")!;
  let stopButton = document.querySelector<HTMLButtonElement>("#stop")!;
  stopButton.style.display = "none";

  startButton.addEventListener("click", async () => {
    stopButton.style.display = "inline";
    startButton.style.display = "none";
    await initBoard(gameData.globalx, gameData.globaly, gameData.board);
    gameState.running = true;
  });

  stopButton.addEventListener("click", async () => {
    stopButton.style.display = "none";
    startButton.style.display = "inline";
    gameState.running = false;
  });
}

export { gameState, initButtons };
