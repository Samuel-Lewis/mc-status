import React from "react";
import { Divider, List } from "antd";
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
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
          xxl: 5,
        }}
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
