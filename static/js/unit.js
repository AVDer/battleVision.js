class Unit {
    id = 0;
    count = 0;
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    angle = 0;
    belligerent = 0;

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

    preDraw(context) {
        context.translate(this.x, this.y);
        context.rotate(this.angle / 180 * Math.PI);
        context.translate(-this.x, -this.y);

        context.beginPath();
        context.lineWidth = this.height;
        context.moveTo(this.x - this.width / 2, this.y)
        context.lineTo(this.x + this.width / 2, this.y)
        context.stroke();
    }

    postDraw(context) {
        const org_color = context.fillStyle;
        context.fillStyle = "#FFFFFF";
        context.beginPath();
        context.arc(this.x, this.y, this.height / 2, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = "#000000";
        context.beginPath();
        context.moveTo(this.x - this.height / 3, this.y);
        context.lineTo(this.x, this.y - this.height / 3);
        context.lineTo(this.x + this.height / 3, this.y);
        context.fill();
        context.fillStyle = org_color;

        context.setTransform(1, 0, 0, 1, 0, 0);
    }
}

export {Unit};