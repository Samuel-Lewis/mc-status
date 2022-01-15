import React from "react";
import {
    Badge,
    Group
} from "@mantine/core";
import { Payload } from "../types";

type VersionProps = {
  server: Payload["server"];
};

export const Version: React.FC<VersionProps> = ({ server }) => {
  if (!server || !server?.name) {
    return null;
  }

  const tags = server.name
    .split(/[\s-,]+/)
    .map((t) => <Badge key={t}>{t}</Badge>);

  return <Group spacing="xs">{tags}</Group>;
};
