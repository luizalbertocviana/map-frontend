import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM, TileWMS} from "ol/source";

const map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new OSM(),
        }),
        new TileLayer({
            extent: [-13884991, 2870341, -7455066, 6338219],
            source: new TileWMS({
                url: 'https://ahocevar.com/geoserver/wms',
                params: {'LAYERS': 'topp:states', 'TILED': true},
                serverType: 'geoserver',
                transition: 0,
            })
        })
    ],
    view: new View({
        center: [-10997148, 4569099],
        zoom: 4,
    })
})