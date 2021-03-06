import "ol/ol.css";
import {Map} from 'ol';
import {View} from 'ol';
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";

const map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ],
    view: new View({
        center: [0, 0],
        zoom: 0
    })
});