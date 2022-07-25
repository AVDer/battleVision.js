import {BelligerentManager} from "./belligerent_manager.js"
import {MapManager} from "./map_manager.js"
import {UnitManager} from "./unit_manager.js"

class BattleManager {

    map_manager = new MapManager();
    belligerent_manager = new BelligerentManager();
    unit_manager = new UnitManager();

    initBattle(battle_info) {
        this.map_manager.initMap(battle_info.map.width, battle_info.map.height, battle_info.images.map);
        this.belligerent_manager.initBelligerents(battle_info.belligerents);
        this.unit_manager.initBattleUnits(battle_info.units);
    }

    drawFrame(context) {
        this.map_manager.drawMap(context);
        for (let i = 0; i < this.belligerent_manager.count(); ++i) {
            this.belligerent_manager.select(i, context);
            this.unit_manager.drawUnits(context, this.belligerent_manager.id(i));
        }
    }
}

export {BattleManager};