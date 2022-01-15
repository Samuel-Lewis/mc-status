import React from "react";
import {
    AiFillCheckCircle,
    AiFillCloseCircle
} from "react-icons/ai";
import { Title } from "@mantine/core";
import { Payload } from "../types";

type OnlineProps = {
  online: Payload["online"];
};

export const Online: React.FC<OnlineProps> = ({ online }) => {
  if (!!online) {
    return (
      <Title order={3}>
        <AiFillCheckCircle style={{ color: "green" }} /> Online!
      </Title>
    );
  }

  return (
    <Title order={3}>
      <AiFillCloseCircle style={{ color: "darkred" }} /> Offline
    </Title>
  );
};
