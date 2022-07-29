import {Unit} from "./unit.js";

class Cavalry extends Unit {

    constructor(unit_info) {
        super(unit_info);
    }

    draw(context) {
        this.preDraw(context);

        const strokeColor = context.strokeStyle;
        context.strokeStyle = "#FFFFFF";
        context.lineWidth = this.height / 3;
        context.moveTo(this.x - this.width / 2, this.y)
        context.lineTo(this.x + this.width / 2, this.y)
        context.stroke();
        context.strokeStyle = strokeColor;

        this.postDraw(context);
    }
}

export {Cavalry};