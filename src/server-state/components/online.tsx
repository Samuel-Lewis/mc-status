import React from "react";

import { Typography } from "antd";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

import { Payload } from "../types";

type OnlineProps = {
  online: Payload["online"];
};

export const Online: React.FunctionComponent<OnlineProps> = ({ online }) => {
  if (!!online) {
    return (
      <Typography.Title level={3}>
        <CheckCircleFilled style={{ color: "green" }} /> Online!
      </Typography.Title>
    );
  }

  return (
    <Typography.Title level={3}>
      <CloseCircleFilled style={{ color: "darkred" }} /> Offline
    </Typography.Title>
  );
};
