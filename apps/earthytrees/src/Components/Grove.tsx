import "./Grove.css";

import { MapSquare } from "../stores/map";

import { useStore } from "stores/useStore";
import { useState } from "react";

import { observer } from "mobx-react-lite";
import { useUIStore } from "stores/useUIStore";
import Coordinates from "stores/map/Coordinates";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const Tree = observer((params: any) => {
  let mapSquareStyle: any = {};

  let TreeMapBlock: any = styled(Box)``;

  // if (params.border.length > 0) {
  //   console.log(params.border);
  // }

  if (params.isBuilding) {
    TreeMapBlock = styled(Box)`
      :hover {
        font-weight: bold;
        cursor: pointer;
      }
      box-sizing: border-box;

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

  switch (params.treeInfo.type) {
    case "nothing":
      return (
        <TreeMapBlock
          onMouseEnter={() => {
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
          onMouseEnter={() => {
            params.setHoverCoordinates(new Coordinates(params.x, params.y));
          }}
          onClick={params.doSquareAction}
          component="span"
          style={{ color: "blue" }}
        >
          ~
        </TreeMapBlock>
      );
    case "tree":
      return (
        <TreeMapBlock
          onMouseEnter={() => {
            params.setHoverCoordinates(new Coordinates(params.x, params.y));
          }}
          onClick={params.doSquareAction}
          component="span"
          style={{ color: "green" }}
        >
          t
        </TreeMapBlock>
      );
    case "house":
      return (
        <TreeMapBlock
          onMouseEnter={() => {
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

  const borderType = function (
    isBuilding: boolean,
    x: number,
    y: number,
    hoverCoordinates: Coordinates,
    isBuildingDimensions: Coordinates | undefined
  ): Array<string> {
    let retVal: Array<string> = [];
    if (!isBuilding || !isBuildingDimensions) {
      return retVal;
    }

    const verticalWall =
      y >= hoverCoordinates.Y &&
      y < hoverCoordinates.Y + isBuildingDimensions.Y;

    const horizontalWall =
      x >= hoverCoordinates.X &&
      x < hoverCoordinates.X + isBuildingDimensions.X;

    if (x === hoverCoordinates.X && verticalWall) {
      console.log(
        `Left when X = ${hoverCoordinates.X} and y is > ${
          hoverCoordinates.Y
        } and < ${hoverCoordinates.Y + isBuildingDimensions.Y}`
      );
      retVal.push("left");
    }

    if (y === hoverCoordinates.Y && horizontalWall) {
      console.log(
        `Top when Y = ${hoverCoordinates.Y} and x is > ${
          hoverCoordinates.X
        } and < ${hoverCoordinates.X + isBuildingDimensions.X}`
      );
      retVal.push("top");
    }

    if (x === hoverCoordinates.X + isBuildingDimensions.X - 1 && verticalWall) {
      console.log(
        `Right when X = ${
          hoverCoordinates.X + isBuildingDimensions.X
        } and y is > ${hoverCoordinates.Y} and < ${
          hoverCoordinates.Y + isBuildingDimensions.Y
        }`
      );

      retVal.push("right");
    }

    if (
      y === hoverCoordinates.Y + isBuildingDimensions.Y - 1 &&
      horizontalWall
    ) {
      console.log(
        `Bottom when y = ${
          hoverCoordinates.Y + isBuildingDimensions.Y
        } and x is > ${hoverCoordinates.X} and < ${
          hoverCoordinates.X + isBuildingDimensions.X
        }`
      );

      retVal.push("bottom");
    }

    if (retVal.length > 0) {
      console.log(`Space [${x}, ${y}] has borders ${retVal}`);
    }
    return retVal;
  };

  return (
    <div className="Grove">
      {hoverCoordinates.X}, {hoverCoordinates.Y}
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
                      rootStore.mapStore.doSquareAction(
                        "BUILD",
                        uiStore.isBuildingDimensions,
                        new Coordinates(j, i)
                      );
                      uiStore.clearActions();
                    }}
                    key={`${i}-${j}`}
                    treeInfo={groveCell}
                    border={borderType(
                      uiStore.isBuilding,
                      j,
                      i,
                      hoverCoordinates,
                      uiStore.isBuildingDimensions
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
    </div>
  );
});

export default Grove;
