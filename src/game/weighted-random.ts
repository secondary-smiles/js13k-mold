import { gameData } from "../main";
import { Grid } from "./grid";

function weightedRandom(): (number | Grid | undefined)[] {
  if (gameData.attractor!.occupied.length == 0) {
    return [
      gameData.mold?.edges[
        Math.floor(Math.random() * gameData.mold?.edges.length)
      ],
      0,
    ];
  }

  let selectionA: (number | Grid)[][] = [];
  gameData.mold?.edges.forEach((edge) => {
    gameData.attractor?.occupied.forEach((attractor) => {
      let score =
        attractor.distanceTo(edge) + (1 - attractor.opacity) * edge.opacity;
      selectionA.push([edge, score]);
    });
  });

  let bestScore: (number | Grid | undefined)[] = [undefined, Infinity];
  selectionA.forEach((item) => {
    if (item[1] < bestScore[1]!) {
      bestScore = item;
    }
  });

  if (bestScore[0] == undefined) {
    return [
      gameData.mold?.edges[
        Math.floor(Math.random() * gameData.mold?.edges.length)
      ],
      0,
    ];
  }
  return bestScore;
}

export { weightedRandom };
