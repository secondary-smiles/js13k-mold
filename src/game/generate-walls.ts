import {gameData} from "../main";
import {Wall} from "./states/wall";

function generateWalls(n_walls: number = 5, WalllengthArr: Array<number> = [50, 600]) {
    gameData.walls = new Wall();
    for (let i = 0; i < n_walls; i++) {
        let startPoint =
            gameData.gridArr![Math.floor(Math.random() * gameData.gridArr!.length)];
        let length = WalllengthArr[i%WalllengthArr.length];
        startPoint.state = 3;
        for (let j = 0; j < length; j++) {
            let s = startPoint.surrounding();
            let next = s[Math.floor(Math.random() * s.length)];
            next.state = 3;
            startPoint = next;
            gameData.walls!.occupied.push(next);
        }
    }
}

export {generateWalls}