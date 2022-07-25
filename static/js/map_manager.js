class MapManager {
    width = 0
    height = 0
    map_image = new Image();

    initMap(w, h, map_data) {
        this.width = w;
        this.height = h;
        this.map_image.src = "data:image/png;base64, " + map_data;
    }

    drawMap(context) {
        context.drawImage(this.map_image, 0, 0, this.width, this.height);
    }
}

export {MapManager};