import React from "react";
import { Typography } from "antd";
import { TeamOutlined } from "@ant-design/icons";

import { Payload } from "../types";

export const Motd: React.FunctionComponent<Payload> = ({ motd }) => {
  if (!motd) {
    return null;
  }

  const parseMotd = "";
  return <Typography.Text strong>{parseMotd}</Typography.Text>;
};
