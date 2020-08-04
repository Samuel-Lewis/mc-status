import React from "react";
import { Spin } from "antd";

export default function Loading() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Loading</h2>
      <Spin size="large" />
    </div>
  );
}
