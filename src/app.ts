import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";

declare var ol: any;

const form = document.querySelector("form")!;
// const addressInput = document.getElementById("address")! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();

  //   const coordinates = { lat: 40.41, lng: -73.99 }; // Can't fetch coordinates from Google API, use dummy ones

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: "map",
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  document.getElementById("map")!.onclick = function () {
    const view = map.getView();
    const zoom = view.getZoom()!;
    view.setZoom(zoom - 1);
  };

  document.getElementById("map")!.innerHTML = ""; // clear <p> from <div id="map">
  //   new ol.Map({
  //     target: "map",
  //     layers: [
  //       new ol.layer.Tile({
  //         source: new ol.source.OSM(),
  //       }),
  //     ],
  //     view: new ol.View({
  //       center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
  //       zoom: 16,
  //     }),
  //   });
}

form.addEventListener("submit", searchAddressHandler);
