import React from "react";
import {
    Box,
    Card,
    CloseButton,
    Group,
    Text as T,
    Title,
    Tooltip
} from "@mantine/core";
import { SearchEntry } from "./types";

export type DetailedListProps = {
  servers: SearchEntry[];
  title: string;
  onDelete?: (server: SearchEntry) => void;
};

export const DetailedList: React.FC<DetailedListProps> = ({
  servers,
  title,
  onDelete,
}) => {
  if (servers.length === 0) {
    return null;
  }

  const toParam = (url: string) => {
    const fullUrl = new URL(window.location.href);
    fullUrl.searchParams.append("ip", url);
    return fullUrl.href;
  };

  const items = servers.map((server) => {
    const del = (
      <Box style={{ height: "28px" }}>
        {onDelete ? (
          <Tooltip label="Remove server">
            <CloseButton onClick={() => onDelete(server)} />
          </Tooltip>
        ) : null}
      </Box>
    );

    return (
      <Card
        key={server.url}
        padding="lg"
        component="a"
        href={toParam(server.url)}
      >
        <Group position="apart">
          <T weight={500}>{server.url}</T>
          {del}
        </Group>
        <T size="sm">{server.name}</T>
      </Card>
    );
  });

  return (
    <>
      <Title order={3}>{title}</Title>
      {items}
    </>
  );
};
