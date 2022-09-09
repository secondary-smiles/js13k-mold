import { gameState } from "./board-interface";
import { gameData } from "../main";
import { weightedRandom } from "../game/weighted-random";

async function moldLoop(wait: number = 1000) {
  let edgeRecalcCounter = 0;
  let interval = setInterval(() => {
    if (!gameState.running) {
      clearInterval(interval);
      return;
    }

    if (edgeRecalcCounter > 25) {
      weightedRandom();
      gameData.mold?.fade(0.05);
      gameData.mold?.edges;
      edgeRecalcCounter = 0;
    }
    gameData.attractor?.fade(0.002);
    gameData.repeller?.fade(0.002);
    try {
      gameData.mold?.grow();
    } catch (e) {}

    edgeRecalcCounter += 1;
  }, wait);
}

export { moldLoop };
