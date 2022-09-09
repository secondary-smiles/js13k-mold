import {gameData} from "../main";
import {Grid} from "./grid";

function weightedRandom():(number | Grid)[][]  {
    let selection: (number | Grid)[][] = [];
    gameData.mold?.edges.forEach((edge) => {
        gameData.attractor?.occupied.forEach((attractor) => {
            let score = attractor.distanceTo(edge) * (1 - attractor.opacity);
            selection.push([edge, score]);
        });
    });

    console.log(selection);
    return selection;
}

export {weightedRandom};