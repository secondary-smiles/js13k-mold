import { Grid } from "../game/grid";
import { Mold } from "../game/states/mold";

type Game = {
  globalx: number;
  globaly: number;
  board: HTMLDivElement;
  gridArr: Array<Grid> | undefined;
  mold: Mold | undefined;
};

export type { Game };
