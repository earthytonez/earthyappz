import "./Grove.css";

import { MapSquare } from "../stores/map";

import { useStore } from "stores/useStore";

import { observer } from "mobx-react-lite";

function Tree(params: any) {
  switch (params.treeInfo.type) {
    case "nothing":
      return <span>.</span>;
    case "lake":
      return <span style={{ color: "blue" }}>~</span>;
    case "tree":
      return <span style={{ color: "green" }}>t</span>;
  }
  return <span>.</span>;
}

function Player() {
  return <span>@</span>;
}

const Grove = observer((params: any) => {
  let groveMatrix = params.map;
  const rootStore = useStore();
  let playerLocation = rootStore.playerStore.currentLocation;
  // for (let y = 0; y < MAP_HEIGHT; y++) {
  //   for (let x = 0; x < MAP_WIDTH; x++) {
  //     if (groveMatrix[y][x].type !== "nothing") {
  //       continue;
  //     }

  //     let rand = { type: "nothing" };
  //     if (Math.floor(Math.random() * 2) === 0) {
  //       rand = { type: "tree" };
  //     }
  //     groveMatrix[y][x] = rand;
  //   }
  // }

  return (
    <div className="Grove">
      {groveMatrix.map((groveColumn: MapSquare[], i: number) => {
        if (Array.isArray(groveColumn)) {
          return (
            <div key={`grove-map-y-${i}`}>
              {groveColumn.map((groveCell: MapSquare, j: number) => {
                if (playerLocation.Y === i && playerLocation.X === j) {
                  return <Player key={`player-${i}-${j}`}></Player>;
                }
                return <Tree key={`${i}-${j}`} treeInfo={groveCell}></Tree>;
              })}
            </div>
          );
        }
        return <div key={`grove-map-y-${i}`}></div>;
      })}
    </div>
  );
});

export default Grove;
