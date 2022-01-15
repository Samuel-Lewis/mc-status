import React from "react";
import {
    Divider,
    SimpleGrid
} from "@mantine/core";
import { Payload } from "../types";
import { PlayerItem } from "./player-item";

type PlayerListProps = {
  players: Payload["players"];
};

export const PlayerList: React.FC<PlayerListProps> = ({ players }) => {
  if (!players) {
    return null;
  }
  const playerMap = new Map<string, string | undefined>();
  players?.list?.forEach((p) => playerMap.set(p, undefined));
  players?.sample?.forEach((p) => playerMap.set(p.name!, p.id!));

  if (playerMap.size === 0) {
    return null;
  }

  const playerList = Array.from(playerMap)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([name, id]) => {
      return <PlayerItem key={`${name}`} player={{ name, id }} />;
    });

  return (
    <>
      <Divider my="lg" label="Player List" labelProps={{ size: "md" }} />

      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: "sm", cols: 2 },
          { maxWidth: "xs", cols: 1 },
        ]}
      >
        {playerList}
      </SimpleGrid>
    </>
  );
};
