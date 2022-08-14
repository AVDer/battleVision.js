import {createManeuver} from "./maneuver_factory.js";

class ManeuverManager {
    #maneuvers = [];

    initManeuvers(maneuvers_info) {
        this.maneuvers = maneuvers_info.map(info =>
            createManeuver(info.type, {
               id            : info.id,
               affectedUnits : info.units,
               startTime     : info.start_time,
               stopTime       : info.stop_time,
               data          : info.data}));
        console.dir(this.maneuvers);
    }

    count() {
        return this.maneuvers.length;
    }

    id(number) {
        return this.maneuvers[number].id;
    }

    apply(time, units) {
        //this.maneuvers.forEach(m => m.apply(time, units));
        this.maneuvers[0].apply(time, units);
    }

}

export {ManeuverManager};