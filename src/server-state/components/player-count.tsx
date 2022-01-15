import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { Text as T } from "@mantine/core";
import { Payload } from "../types";

type PlayerCountProps = {
  players: Payload["players"];
};

export const PlayerCount: React.FC<PlayerCountProps> = ({ players }) => {
  if (!players) {
    return null;
  }

  const { now, max } = players;
  return (
    <T>
      <AiOutlineTeam /> {now} / {max} player{now === 1 ? "" : "s"} online
    </T>
  );
};
