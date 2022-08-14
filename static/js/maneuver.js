class Maneuver {
    #id
    #affectedUnits
    #startTime
    #stopTime
    #data

    constructor(maneuver_info) {
        this.id = maneuver_info.id;
        this.affectedUnits = maneuver_info.affectedUnits;
        this.startTime = maneuver_info.startTime;
        this.stopTime = maneuver_info.stopTime;
        this.data = maneuver_info.data;
    }
}

export {Maneuver};