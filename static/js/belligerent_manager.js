class BelligerentManager {
    belligerents = [];

    initBelligerents(belligerents_info) {
        this.belligerents = belligerents_info;
    }

    count() {
        return this.belligerents.length;
    }

    id(number) {
        return this.belligerents[number].id;
    }

    select(number, context) {
        context.fillStyle = this.belligerents[number].color;
        context.strokeStyle = this.belligerents[number].color;
    } 
}

export {BelligerentManager};