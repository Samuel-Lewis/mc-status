import React from "react";
import { Typography } from "antd";
import { TeamOutlined } from "@ant-design/icons";

import { Payload } from "../types";

type PlayerCountProps = {
  players: Payload["players"];
};

export const PlayerCount: React.FunctionComponent<PlayerCountProps> = ({
  players,
}) => {
  if (!players) {
    return null;
  }

  const { now, max } = players;
  return (
    <Typography.Text strong>
      <TeamOutlined /> {now} / {max} player{now === 1 ? "" : "s"} online
    </Typography.Text>
  );
};
