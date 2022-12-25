import "./Grove.css";

import { MapSquare } from "../stores/map";

import { useStore } from "stores/useStore";
import { useState } from "react";

import { observer } from "mobx-react-lite";
import { useUIStore } from "stores/useUIStore";
import Coordinates from "stores/map/Coordinates";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import { TBuildingSlug } from "stores/buildings/buildings";

import { blue, green } from "@mui/material/colors";

const Tree = observer((params: any) => {
  let mapSquareStyle: any = {};

  let TreeMapBlock: any = styled(Box)``;

  // if (params.border.length > 0) {
  //   console.log(params.border);
  // }

  let squareType = params.treeInfo.type;
  if (params.border.includes("not-buildable")) {
    squareType = "warning";
  }

  if (params.isBuilding) {
    TreeMapBlock = styled(Box)`
      :hover {
        font-weight: bold;
        cursor: pointer;
      }
      box-sizing: border-box;
      ${params.border.includes("not-buildable") ? `content: "X";` : null}

      ${params.border.includes("top") ? "border-top: 1px solid brown;" : null}
      ${params.border.includes("bottom")
        ? "border-bottom: 1px solid brown;"
        : null}
      ${params.border.includes("left") ? "border-left: 1px solid brown;" : null}
      ${params.border.includes("right")
        ? "border-right: 1px solid brown;"
        : null}
    `;
  }

  switch (squareType) {
    case "flat_land":
      return (
        <TreeMapBlock
          onMouseOver={() => {
            params.setHoverCoordinates(new Coordinates(params.x, params.y));
          }}
          onClick={params.doSquareAction}
          component="span"
          style={mapSquareStyle}
        >
          .
        </TreeMapBlock>
      );
    case "lake":
      return (
        <TreeMapBlock
          onMouseOver={() => {
            params.setHoverCoordinates(new Coordinates(params.x, params.y));
          }}
          onClick={params.doSquareAction}
          component="span"
          style={{ color: blue[900] }}
        >
          ~
        </TreeMapBlock>
      );
    case "tree":
      return (
        <TreeMapBlock
          onMouseOver={() => {
            params.setHoverCoordinates(new Coordinates(params.x, params.y));
          }}
          onClick={params.doSquareAction}
          component="span"
          style={{ color: green[900] }}
        >
          t
        </TreeMapBlock>
      );
    case "house":
      return (
        <TreeMapBlock
          onMouseOver={() => {
            params.setHoverCoordinates(new Coordinates(params.x, params.y));
          }}
          onClick={params.doSquareAction}
          component="span"
          style={{
            color: "brown",
            border: "1px solid brown",
            backgroundColor: "brown",
          }}
        >
          &#9608;
        </TreeMapBlock>
      );
    case "dock":
      return (
        <TreeMapBlock
          onMouseOver={() => {
            params.setHoverCoordinates(new Coordinates(params.x, params.y));
          }}
          onClick={params.doSquareAction}
          component="span"
          style={{
            color: "brown",
            border: "1px solid brown",
            backgroundColor: "brown",
          }}
        >
          &#9617;
        </TreeMapBlock>
      );
    case "warning":
      return (
        <TreeMapBlock
          onMouseOver={() => {
            params.setHoverCoordinates(new Coordinates(params.x, params.y));
          }}
          onClick={params.doSquareAction}
          component="span"
          style={{
            color: "red",
          }}
        >
          X
        </TreeMapBlock>
      );
  }
  return <span>.</span>;
});

function Player() {
  return (
    <span>
      <b>@</b>
    </span>
  );
}

function Destination() {
  return (
    <span>
      <b style={{ color: "red" }}>X</b>
    </span>
  );
}

const Grove = observer((params: any) => {
  let groveMatrix = params.map;
  const rootStore = useStore();
  const uiStore = useUIStore();

  const [hoverCoordinates, setHoverCoordinates] = useState(
    new Coordinates(0, 0)
  );

  let playerLocation = rootStore.playerStore.currentLocation;
  let playerDestination = rootStore.playerStore.currentDestination;

  const inHoverSquare = function (
    x: number,
    y: number,
    hoverCoordinates: Coordinates,
    buildingDimensions: Coordinates
  ): boolean {
    return (
      x >= hoverCoordinates.X &&
      x < hoverCoordinates.X + buildingDimensions.X &&
      y >= hoverCoordinates.Y &&
      y < hoverCoordinates.Y + buildingDimensions.Y
    );
  };

  const borderType = function (
    isBuilding: boolean,
    isBuildingType: TBuildingSlug | undefined,
    isBuildingDimensions: Coordinates | undefined,
    x: number,
    y: number,
    hoverCoordinates: Coordinates
  ): Array<string> {
    let retVal: Array<string> = [];
    if (!isBuilding || !isBuildingDimensions || !isBuildingType) {
      return retVal;
    }

    if (
      !rootStore.mapStore.isBuildable(new Coordinates(x, y), isBuildingType) &&
      inHoverSquare(x, y, hoverCoordinates, isBuildingDimensions)
    ) {
      retVal.push("not-buildable");
    }

    const verticalWall =
      y >= hoverCoordinates.Y &&
      y < hoverCoordinates.Y + isBuildingDimensions.Y;

    const horizontalWall =
      x >= hoverCoordinates.X &&
      x < hoverCoordinates.X + isBuildingDimensions.X;

    if (x === hoverCoordinates.X && verticalWall) {
      retVal.push("left");
    }

    if (y === hoverCoordinates.Y && horizontalWall) {
      retVal.push("top");
    }

    if (x === hoverCoordinates.X + isBuildingDimensions.X - 1 && verticalWall) {
      retVal.push("right");
    }

    if (
      y === hoverCoordinates.Y + isBuildingDimensions.Y - 1 &&
      horizontalWall
    ) {
      retVal.push("bottom");
    }

    return retVal;
  };

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
                if (
                  playerDestination &&
                  playerDestination.Y === i &&
                  playerDestination.X === j
                ) {
                  return <Destination key={`player-${i}-${j}`}></Destination>;
                }
                return (
                  <Tree
                    hoverCoordinates={hoverCoordinates}
                    setHoverCoordinates={setHoverCoordinates}
                    isBuilding={uiStore.isBuilding}
                    isBuildingDimensions={uiStore.isBuildingDimensions}
                    doSquareAction={() => {
                      if (!uiStore.isBuilding) {
                        return;
                      }
                      if (
                        rootStore.mapStore.doSquareAction(
                          "BUILD",
                          uiStore.isBuildingType,
                          uiStore.isBuildingDimensions,
                          new Coordinates(j, i)
                        )
                      ) {
                        uiStore.clearActions();
                      }
                    }}
                    key={`${i}-${j}`}
                    treeInfo={groveCell}
                    border={borderType(
                      uiStore.isBuilding,
                      uiStore.isBuildingType,
                      uiStore.isBuildingDimensions,
                      j,
                      i,
                      hoverCoordinates
                    )}
                    x={j}
                    y={i}
                  ></Tree>
                );
              })}
            </div>
          );
        }
        return <div key={`grove-map-y-${i}`}></div>;
      })}
      {hoverCoordinates.X}, {hoverCoordinates.Y}
    </div>
  );
});

export default Grove;
