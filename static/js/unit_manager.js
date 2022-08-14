import {createUnit} from "./unit_factory.js";

class UnitManager {
    units = [];

    initBattleUnits(units_info) {
        this.units = units_info.map(unit_info =>
            createUnit(unit_info.type, {
               id : unit_info.id,
               x : unit_info.position_x,
               y : unit_info.position_y,
               angle : unit_info.angle,
               width : unit_info.size_x,
               height : unit_info.size_y,
               belligerent : unit_info.belligerent,
               count : unit_info.count}));
    }

    drawUnits(context, scale, belligerent) {
        if (belligerent) {
            this.units
                .filter(unit => unit.belligerent === belligerent)
                .forEach(unit => unit.draw(context, scale));    
        }
    }
}

export {UnitManager};