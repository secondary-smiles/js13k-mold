import { Grid } from "../game/grid";
import { Mold } from "../game/states/mold";
import { Attractor } from "../game/states/attractor";

type Game = {
  globalx: number;
  globaly: number;
  board: HTMLDivElement;
  gridArr: Array<Grid> | undefined;
  mold: Mold | undefined;
  attractor: Attractor | undefined;
};

export type { Game };
