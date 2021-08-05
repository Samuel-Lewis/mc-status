import React from "react";
import { Tag } from "antd";

import { Payload } from "../types";

type VersionProps = {
  server: Payload["server"];
};

export const Version: React.FunctionComponent<VersionProps> = ({ server }) => {
  if (!server || !server?.name) {
    return null;
  }

  const tags = server.name.split(/[\s-,]+/).map((t) => <Tag key={t}>{t}</Tag>);

  return <div style={{ maxWidth: "400px" }}>{tags}</div>;
};
