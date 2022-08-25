async function initBoard(x: number, y: number, board: HTMLDivElement) {
    await initGrid(x, y, board);
}

async function initGrid(xnum: number, ynum: number, board: HTMLDivElement) {
    for (let y = 0; y < ynum; y++) {
        board.innerHTML += `<div class='row' id='row-${y}'><div>`;
        let row = document.querySelector<HTMLDivElement>(`#row-${y}`)!;

        row.style.height = `${board.clientHeight/ynum}px`

        for (let x = 0; x < xnum; x++) {
            row.innerHTML += `<div class='grid' id='grid-${x}'><div>`;
            const grid = document.querySelector<HTMLDivElement>(`#grid-${x}`)!;
        }
    }
}

export {initBoard}