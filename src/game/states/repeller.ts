import { Grid } from "../grid";

class Repeller {
  occupied: Array<Grid>;

  constructor() {
    this.occupied = [];
  }

  fade(amount: number) {
    this.occupied.forEach((g) => {
      g.opacity -= amount;
      if (g.opacity <= 0) {
        g.opacity = 0;
        let index = this.occupied.indexOf(g);
        if (index > -1) {
          this.occupied.splice(index, 1);
        }
        g.state = 0;
        g.opacity = 1;
      }
    });
  }
}

export { Repeller };
