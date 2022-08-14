import {Maneuver} from "./maneuver.js";

class Move extends Maneuver {

    constructor(maneuver_info) {
        super(maneuver_info);
    }

    apply(time, units) {
        if (time < this.startTime) return;
        console.log(this.stopTime);
        if (time > this.stopTime) {
            
            units.forEach(unit => {
                if (!this.affectedUnits.includes(unit.id)) return;
                unit.x = this.data[2];
                unit.y = this.data[3];
            })
        }
    }
}

export {Move};