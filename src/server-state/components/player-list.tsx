import React from "react";
import { Typography, Divider, List } from "antd";
import { TeamOutlined } from "@ant-design/icons";

import { PlayerItem } from "./player-item";

export const PlayerList = (props: { data?: { list?: string[] } }) => {
  if (!props.data || !props.data.list || props.data.list.length === 0) {
    return null;
  }

  const list = props.data.list;

  return (
    <>
      <Divider orientation="left">Player List</Divider>
      <List
        dataSource={list}
        size="large"
        renderItem={(item) => (
          <List.Item>
            <PlayerItem name={item} />
          </List.Item>
        )}
      />
    </>
  );
};
