import { gameState } from "./board-interface";
import { gameData } from "../main";

async function moldLoop(wait: number = 1000) {
  let interval = setInterval(() => {
    if (!gameState.running) {
      clearInterval(interval);
      return;
    }
    console.log("Mold loop running.");
    gameData.mold?.grow();
  }, wait);
}

export { moldLoop };
