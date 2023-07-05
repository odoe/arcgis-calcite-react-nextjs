"use client";

import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";

import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
} from "@esri/calcite-components-react";

import { useLayoutEffect, useRef } from "react";

import { setAssetPath } from "@esri/calcite-components/dist/components";

import "@arcgis/core/assets/esri/themes/dark/main.css";

setAssetPath("https://unpkg.com/@esri/calcite-components/dist/calcite/assets");

export default function Home() {
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (mapDiv.current) {
      import("../libs/mapping").then((mapping) => {
        mapping.init(mapDiv.current!);
      });
    }
  }, [mapDiv]);

  return (
    <div className="h-full w-full">
      <CalciteShell id="mainCalciteShell">
        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="home"
              icon="home"
              text="Reset"
              textEnabled={true}
            ></CalciteAction>
            <CalciteAction
              data-action-id="legend"
              icon="legend"
              text="Legend"
              textEnabled={true}
              label="Legend"
            ></CalciteAction>
          </CalciteActionBar>
        </CalciteShellPanel>
        <div className="h-full w-full" ref={mapDiv}></div>
      </CalciteShell>
    </div>
  );
}
