class Unit {
    id = 0;
    count = 0;
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    angle = 0;
    belligerent = 0;

    scaled_x = 0;
    scaled_y = 0;
    scaled_width = 0;
    scaled_height = 0;

    constructor(unit_info) {
        this.id = unit_info.id;
        this.x = unit_info.x;
        this.y = unit_info.y;
        this.angle = unit_info.angle;
        this.width = unit_info.width;
        this.height = unit_info.height;
        this.belligerent = unit_info.belligerent;
        this.count = unit_info.count;
    }

    scale(factor) {
        this.scaled_x = this.x * factor;
        this.scaled_y = this.y * factor;
        this.scaled_width = this.width * factor;
        this.scaled_height = this.height * factor;
    }

    preDraw(context, scale) {
        context.translate(this.scaled_x, this.scaled_y);
        context.rotate(this.angle / 180 * Math.PI);
        context.translate(-this.scaled_x, -this.scaled_y);

        context.beginPath();
        context.lineWidth = this.scaled_height;
        context.moveTo(this.scaled_x - this.scaled_width / 2, this.scaled_y)
        context.lineTo(this.scaled_x + this.scaled_width / 2, this.scaled_y)
        context.stroke();
    }

    postDraw(context) {
        const org_color = context.fillStyle;
        context.fillStyle = "#FFFFFF";
        context.beginPath();
        context.arc(this.scaled_x, this.scaled_y, this.scaled_height / 2, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = "#000000";
        context.beginPath();
        context.moveTo(this.scaled_x - this.scaled_height / 3, this.scaled_y);
        context.lineTo(this.scaled_x, this.scaled_y - this.scaled_height / 3);
        context.lineTo(this.scaled_x + this.scaled_height / 3, this.scaled_y);
        context.fill();
        context.fillStyle = org_color;

        context.setTransform(1, 0, 0, 1, 0, 0);
    }
}

export {Unit};