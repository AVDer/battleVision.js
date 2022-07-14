import {UnitManager} from "./unit_manager.js"

class BattleManager {

    unit_manager = new UnitManager();

    initBattle(battle_info) {
        this.unit_manager.initBattleUnits(battle_info.units);
    }
}

export {BattleManager};