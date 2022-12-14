import { Grid } from "../grid";
import { weightedRandom } from "../weighted-random";
import { gameData } from "../../main";

class Mold {
  source: Array<Grid>;
  occupied: Array<Grid>;
  p_edges: Array<Grid>;

  constructor(source: Array<Grid>) {
    this.occupied = [];
    this.source = source;
    this.source.forEach((g) => {
      this.occupied.push(g);
    });
    this.p_edges = this.occupied;
  }

  calcEdges() {
    let returnList: Array<Grid> = [];
    this.occupied.forEach((g) => {
      let nRun = true;
      if (gameData.prefs!.wall_barrier_type == "strict") {
        g.surrounding().forEach((s) => {
          if (s.state == 3) {
            nRun = false;
          }
        });
      }
      if (nRun) {
        g.surrounding().forEach((n) => {
          if (n.state == 0 && !returnList.includes(g)) {
            returnList.push(g);
            // return;
          }
        });
      }
    });
    this.edges = returnList;
    return returnList;
  }

  get edges() {
    this.p_edges = this.calcEdges();
    return this.p_edges;
  }

  set edges(newEdges: Array<Grid>) {
    this.p_edges = newEdges;
  }

  grow() {
    let item = weightedRandom()[0]!;
    if (item instanceof Grid) {
      item.surrounding().forEach((g) => {
        if (g.state == 0) {
          this.occupied.push(g);
          g.state = 1;
        }
      });
    }
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

        index = this.p_edges.indexOf(g);
        if (index > -1) {
          this.p_edges.splice(index, 1);
        }
        g.state = 0;
        g.opacity = 1;
      }
    });
  }
}

export { Mold };
