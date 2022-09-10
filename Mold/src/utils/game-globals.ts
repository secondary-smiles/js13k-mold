import { Grid } from "../game/grid";
import { Mold } from "../game/states/mold";
import { Attractor } from "../game/states/attractor";
import { Wall } from "../game/states/wall";
import { Prefs } from "../prefs";

type Game = {
  globalx: number;
  globaly: number;
  board: HTMLDivElement;
  gridArr: Array<Grid> | undefined;
  mold: Mold | undefined;
  attractor: Attractor | undefined;
  walls: Wall | undefined;
  prefs: Prefs | undefined;
};

export type { Game };
