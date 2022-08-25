import { globalx, globaly, board } from "../main";
import { initBoard } from "../game/board";

let running = false;

function initButtons() {
  let startButton = document.querySelector<HTMLButtonElement>("#start")!;
  let stopButton = document.querySelector<HTMLButtonElement>("#stop")!;
  stopButton.style.display = "none";

  startButton.addEventListener("click", async () => {
    running = true;
    stopButton.style.display = "inline";
    startButton.style.display = "none";
    await initBoard(globalx, globaly, board);
    window.addEventListener("resize", event);
  });

  stopButton.addEventListener("click", async () => {
    running = false;
    stopButton.style.display = "none";
    startButton.style.display = "inline";
      window.removeEventListener("resize", event);
  });
}

async function event() {
    initBoard(globalx, globaly, board)
}

export { running, initButtons };
