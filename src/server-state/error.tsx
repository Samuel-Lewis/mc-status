import React from "react";
import {
    Center,
    Code,
    Group,
    Text as T,
    Title
} from "@mantine/core";

export type ErrorProps = {
  message?: string;
};

export const Error: React.FC<ErrorProps> = ({ message }) => (
  <Center>
    <Group position="center" direction="column" grow>
      <Title order={2}>Failed to fetch server details</Title>
      <T>Please check the server address and try again.</T>
      {message && <Code block>{message}</Code>}
    </Group>
  </Center>
);
