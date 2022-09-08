import { Grid } from "../game/grid";
import { Mold } from "../game/states/mold";
import { Attractor } from "../game/states/attractor";
import { Repeller } from "../game/states/repeller";

type Game = {
  globalx: number;
  globaly: number;
  board: HTMLDivElement;
  gridArr: Array<Grid> | undefined;
  mold: Mold | undefined;
  attractors: Attractor | undefined;
  repellers: Repeller | undefined;
};

export type { Game };
