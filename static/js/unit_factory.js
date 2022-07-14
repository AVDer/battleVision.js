import {Cavalry} from "./cavalry.js";
import {Infantry} from "./infantry.js";

function createUnit(type, info) {
    if (type === 1) return new Infantry(info);
    if (type === 2) return new Cavalry(info);
}

export {createUnit};