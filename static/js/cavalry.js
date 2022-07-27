import {Unit} from "./unit.js";

class Cavalry extends Unit {

    constructor(unit_info) {
        super(unit_info);
    }

    draw(context) {
        context.translate(this.x, this.y);
        context.rotate(this.angle / 180 * Math.PI);
        context.translate(-this.x, -this.y);

        context.beginPath();
        context.lineWidth = this.height;
        context.moveTo(this.x - this.width / 2, this.y)
        context.lineTo(this.x + this.width / 2, this.y)
        context.stroke();

        const strokeColor = context.strokeStyle;
        context.strokeStyle = "#FFFFFF";
        context.lineWidth = this.height / 3;
        context.moveTo(this.x - this.width / 2, this.y)
        context.lineTo(this.x + this.width / 2, this.y)
        context.stroke();
        context.strokeStyle = strokeColor;

        const org_color = context.fillStyle;
        context.fillStyle = "#000000";
        context.fillText("↑", this.x, this.y);
        context.fillStyle = org_color;

        context.setTransform(1, 0, 0, 1, 0, 0);
    }
}

export {Cavalry};