import React from "react";

import { Typography } from "antd";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

export const Online = (props: { status?: boolean }) => {
  if (!!props.status) {
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
