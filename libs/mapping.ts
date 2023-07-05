import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

interface MapApp {
  view?: MapView;
}

const app: MapApp = {};

export async function init(container: HTMLDivElement) {
  if (app.view) {
    app.view.destroy();
  }

  const map = new ArcGISMap({
    basemap: "topo-vector",
  });

  const view = new MapView({
    map,
    container,
    center: [-118, 34],
    zoom: 8,
  });

  app.view = view;

  return cleanup;
}

function cleanup() {
  app.view?.destroy();
}
