import {Unit} from "./unit.js";

class Cavalry extends Unit {

    constructor(unit_info) {
        super(unit_info);
    }

    draw(context, scale) {
        this.scale(scale);
        this.preDraw(context);

        const strokeColor = context.strokeStyle;
        context.strokeStyle = "#FFFFFF";
        context.lineWidth = this.scaled_height / 3;
        context.moveTo(this.scaled_x - this.scaled_width / 2, this.scaled_y)
        context.lineTo(this.scaled_x + this.scaled_width / 2, this.scaled_y)
        context.stroke();
        context.strokeStyle = strokeColor;

        this.postDraw(context);
    }
}

export {Cavalry};