import {BelligerentManager} from "./belligerent_manager.js"
import { ManeuverManager } from "./maneuver_manager.js";
import {MapManager} from "./map_manager.js"
import {UnitManager} from "./unit_manager.js"

class BattleManager {

    maneuver_manager = new ManeuverManager();
    map_manager = new MapManager();
    belligerent_manager = new BelligerentManager();
    unit_manager = new UnitManager();
    canvas_width = 1000;
    canvas_height = 1000;
    scale_factor = 1;

    constructor(canvas_width, canvas_height) {
        this.canvas_width = canvas_width;
        this.canvas_height = canvas_height;
    }

    /**
     * Initialize the current battle structure
     * @param {BattleInfo} battle_info JSON struct containing the complete battle information
     */
    initBattle(battle_info) {
        this.map_manager.initMap(this.canvas_width, this.canvas_height, battle_info.images.map);
        this.belligerent_manager.initBelligerents(battle_info.belligerents);
        this.maneuver_manager.initManeuvers(battle_info.maneuvers);
        this.scale_factor = Math.min(this.canvas_width / battle_info.map.width, this.canvas_height / battle_info.map.height);
        this.unit_manager.initBattleUnits(battle_info.units);
    }

    /**
     * Function draws a single frame. Having a context, first map is drawn, then the units.
     * @param {CanvasRenderingContext2D} context Drawing context that is forwarded to other drewn components: map, units
     * @param {Number} timestamp Time stamp for maneuvers
     */
    drawFrame(context, timestamp) {
        this.map_manager.drawMap(context);
        this.maneuver_manager.apply(timestamp, this.unit_manager.units);
        for (let i = 0; i < this.belligerent_manager.count(); ++i) {
            this.belligerent_manager.select(i, context);
            this.unit_manager.drawUnits(context, this.scale_factor, this.belligerent_manager.id(i));
        }
    }
}

export {BattleManager};