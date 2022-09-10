import { gameData } from "../main";
import { Wall } from "./states/wall";
import { Grid } from "./grid";

function generateWalls(
  n_walls: number = gameData.prefs!.num_walls,
  wallLengthArr: Array<number> = [gameData.prefs!.wall_size]
) {
  gameData.walls = new Wall();
  for (let i = 0; i < n_walls; i++) {
    let startPoint =
      gameData.gridArr![Math.floor(Math.random() * gameData.gridArr!.length)];
    let length = wallLengthArr[i % wallLengthArr.length];
    startPoint.state = 3;
    for (let j = 0; j < length; j++) {
      let s = startPoint.surrounding();
      let next: Grid = startPoint;
      if (gameData.prefs!.wall_generation_mode == "lines") {
        next = s[Math.floor(Math.random() * s.length) % 3];
      } else {
        next = s[Math.floor(Math.random() * s.length)];
      }
      next.state = 3;
      startPoint = next;
      gameData.walls!.occupied.push(next);
    }
  }
}

export { generateWalls };
