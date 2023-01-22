/**
 * Class handling map drawing. Stores the map image and its presentation size.
 */
class MapManager {
    width = 0
    height = 0
    map_image = new Image();

    initMap(w, h, map_data) {
        this.width = w;
        this.height = h;
        this.map_image.src = "data:image/png;base64, " + map_data;
    }

    /**
     * Draw map on the provided context
     * Function gets the 2D context and draws the stored map. Size is defined by the class width and height values.
     * @param {CanvasRenderingContext2D} context Map drawing context
     */
    drawMap(context) {
        context.drawImage(this.map_image, 0, 0, this.width, this.height);
    }
}

export {MapManager};