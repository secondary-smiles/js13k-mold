import {board} from "../main";

async function updatePlayerGlobal(stateObj: any) {
    console.log(`Value changed to ${stateObj.state}`);

    switch (stateObj.state) {
        case true:
            board.style.cursor = "none";
            break;
        default:
            board.style.cursor = "auto";
            break;
    }
}

export {updatePlayerGlobal}