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
}

export {Unit};