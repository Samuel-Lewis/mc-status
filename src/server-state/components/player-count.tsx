import React from "react";
import { Typography } from "antd";
import { TeamOutlined } from "@ant-design/icons";

export const PlayerCount = (props: {
  data?: { now?: number; max?: number };
}) => {
  if (!props.data) {
    return null;
  }

  const { now, max } = props.data;
  return (
    <Typography.Text strong>
      <TeamOutlined /> {now} / {max} player{now === 1 ? "" : "s"} online
    </Typography.Text>
  );
};
