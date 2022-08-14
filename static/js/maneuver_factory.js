import {Move} from "./maneuver_move.js";

function createManeuver(type, info) {
    if (type === 1) return new Move(info);
}

export {createManeuver};