import {Unit} from "./unit.js";

class Infantry extends Unit {

    constructor(unit_info) {
        super(unit_info);
    }

    draw(context) {
        context.translate(this.x, this.y);
        context.rotate(this.angle / 180 * Math.PI);
        context.translate(-this.x, -this.y);
        context.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        const org_color = context.fillStyle;
        context.fillStyle = "#FFFFFF";
        context.fillText("↑", this.x, this.y);
        context.fillStyle = org_color;
        context.setTransform(1, 0, 0, 1, 0, 0);
    }
}

export {Infantry};