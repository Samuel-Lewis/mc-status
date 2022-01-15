import React from "react";
import {
    Group,
    Loader,
    Title
} from "@mantine/core";

export default function Loading() {
  return (
    <Group direction="column" position="center">
      <Title order={2}>Loading</Title>
      <Loader size="lg" />
    </Group>
  );
}
