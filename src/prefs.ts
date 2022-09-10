import { gameData } from "./main";

class Prefs {
  wall_generation_mode: String;
  num_walls: number;
  wall_barrier_type: String;

  constructor(
    wall_generation_mode: String,
    num_walls: number,
    wall_barrier_type: String
  ) {
    this.wall_generation_mode = wall_generation_mode;
    this.num_walls = num_walls;
    this.wall_barrier_type = wall_barrier_type;
  }
}

async function initPrefs() {
  await populatePrefsDiv();
  await toggleShowPrefs();
  const prefsShowButton =
    document.querySelector<HTMLButtonElement>("#show-prefs");
  const prefsSetButton =
    document.querySelector<HTMLButtonElement>("#prefs-set");
  prefsShowButton!.addEventListener("click", async () => {
    await toggleShowPrefs();
  });
  prefsSetButton!.addEventListener("click", async () => {
    await setPrefs();
  });
}

async function toggleShowPrefs() {
  const prefsDiv = document.querySelector<HTMLDivElement>("#prefs");
  if (prefsDiv!.style.display === "none") {
    prefsDiv!.style.display = "block";
  } else {
    prefsDiv!.style.display = "none";
  }
  window.scrollTo(0, document.body.scrollHeight);
}

async function populatePrefsDiv() {
  const div = document.querySelector<HTMLDivElement>("#prefs");
  div!.innerHTML = `
<div id="prefs-content">
    <h2>Preferences</h2>
    <div id="prefs-wall-generation-mode" >
        <label for="wall-generation-mode">Wall Generation Mode</label>
        <select name="Wall Generation Mode" id="wall-generation-mode">
            <option value="mass">Mass</option>
            <option value="lines">Lines</option>
        </select>
    </div>
    <div id="prefs-num-walls" >
        <label for="num-walls">Number of Walls</label>
        <input id="num-walls" type="number" value="2">
    </div>
    <div id="prefs-wall-barrier-type">
        <label for="wall-barrier-type">Wall Barrier Type</label>
        <select name="Wall Barrier Type" id="wall-barrier-type">
            <option value="strict">Strict</option>
            <option value="lenient">Lenient</option>
        </select>
    </div>
    <button id="prefs-set">Set</button>
</div>
  `;
}

async function setPrefs() {
  let wall_generation_mode = document.querySelector<HTMLSelectElement>(
    "#wall-generation-mode"
  )!.value;
  let num_walls = document.querySelector<HTMLInputElement>("#num-walls")!.value;
  let wall_barrier_type =
    document.querySelector<HTMLSelectElement>("#wall-barrier-type")!.value;

  let newPrefs = new Prefs(
    wall_generation_mode,
    Number(num_walls),
    wall_barrier_type
  );
  gameData.prefs = newPrefs;
  console.log(newPrefs);
}

export { initPrefs, Prefs };
