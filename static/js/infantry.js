import {Unit} from "./unit.js";

class Infantry extends Unit {

    constructor(unit_info) {
        super(unit_info);
    }

    draw(context) {
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

export {Infantry};