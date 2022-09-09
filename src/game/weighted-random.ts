import {gameData} from "../main";
import {Grid} from "./grid";

function weightedRandom(): (number | Grid | undefined)[]  {
    let selection: (number | Grid)[][] = [];
    gameData.mold?.edges.forEach((edge) => {
        gameData.attractor?.occupied.forEach((attractor) => {
            let score = attractor.distanceTo(edge) * (1 - attractor.opacity);
            selection.push([edge, score]);
        });
    });

    let bestScore: (number | Grid | undefined)[] = [undefined, Infinity];
    selection.forEach((item) => {
        if (item[1] < bestScore[1]!) {
            bestScore = item;
        }
    });

    if (bestScore[0] == undefined) {
        return [gameData.mold?.edges[Math.floor(Math.random() * gameData.mold?.edges.length)], 0];
    }
    return bestScore;
}

export {weightedRandom};