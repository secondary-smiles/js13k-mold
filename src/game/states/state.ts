import { Attractor } from "./attractor";
import { Mold } from "./mold";
import { Repeller } from "./repeller";
import { Wall } from "./wall";

class State {
  id: string;
  tIndex: number;
  kind: Attractor | Mold | Repeller | Wall | undefined;

  constructor(type: number, id: string) {
    this.tIndex = type;
    this.id = id;

    switch (this.tIndex) {
      case 1:
        this.kind = Mold;
        break;
      case 2:
        this.kind = Attractor;
        break;
      case 3:
        this.kind = Repeller;
        break;
      case 4:
        this.kind = Wall;
        break;
      default:
        this.kind = undefined;
        break;
    }
  }

  get index() {
    return this.tIndex;
  }

  set index(v: number) {
    this.tIndex = v;
    this.setHooks();
  }

  setHooks() {
    this.setStateAttr();
  }

  setStateAttr() {
    let ob = document.querySelector<HTMLDivElement>("#" + this.id)!;
    switch (this.index) {
      case 0:
        this.kind = undefined;
        ob.style.background = "transparent";
        ob.className = "grid grid-active";
        ob.style.opacity = "1";
        break;
      case 1:
        this.kind = Mold;
        ob.className = "grid grid-active mold";
        break;
      case 2:
        this.kind = Attractor;
        ob.className += " attractor";
        break;
      case 3:
        this.kind = Repeller;
        ob.className += " repeller";
        break;
      case 4:
        this.kind = Wall;
        ob.className += " wall";
        break;
      default:
        break;
    }
  }
}

export { State };
