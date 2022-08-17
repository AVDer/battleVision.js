import {Maneuver} from "./maneuver.js";

class Move extends Maneuver {

    constructor(maneuver_info) {
        super(maneuver_info);
    }

    apply(time, units) {
        if (time < this.startTime) return;
        if (time > this.stopTime) {     
            units.forEach(unit => {
                if (!this.affectedUnits.includes(unit.id)) return;
                unit.x = this.data[2];
                unit.y = this.data[3];
            })
        } else {
            units.forEach(unit => {
                if (!this.affectedUnits.includes(unit.id)) return;
                unit.x = this.data[0] + (this.data[2] - this.data[0]) / (this.stopTime - this.startTime) * (time - this.startTime);
                unit.y = this.data[1] + (this.data[3] - this.data[1]) / (this.stopTime - this.startTime) * (time - this.startTime);
            })
        }
    }
}

export {Move};