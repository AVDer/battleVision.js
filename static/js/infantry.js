import {Unit} from "./unit.js";

class Infantry extends Unit {

    constructor(unit_info) {
        super(unit_info);
    }

    draw(context, scale) {
        this.scale(scale);
        this.preDraw(context);
        this.postDraw(context);
    }
}

export {Infantry};