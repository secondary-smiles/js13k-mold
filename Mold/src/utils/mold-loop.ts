import { gameState } from "./board-interface";
import { gameData } from "../main";

async function moldLoop(wait: number = 1000) {
  let edgeRecalcCounter = 0;
  let interval = setInterval(() => {
    if (!gameState.running) {
      clearInterval(interval);
      return;
    }

    if (edgeRecalcCounter > 5) {
      gameData.mold?.fade(0.1);
      gameData.mold?.edges;
      edgeRecalcCounter = 0;
    }

    gameData.attractor?.fade(0.002);
    try {
      gameData.mold?.grow();
    } catch (e) {}

    edgeRecalcCounter += 1;
  }, wait);
}

export { moldLoop };
