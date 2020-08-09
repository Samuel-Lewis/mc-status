import React from "react";

import { List, Avatar } from "antd";

export type PlayerDataType = {
  id?: string;
  name?: string;
  legacy?: boolean;
  demo?: boolean;
};

export const PlayerItem = (props: PlayerDataType) => {
  const { name, id } = props;

  return (
    <List.Item.Meta
      avatar={
        <Avatar
          shape="square"
          size="large"
          src={`https://crafatar.com/renders/body/${id}?overlay`}
        />
      }
      title={name}
    />
  );
};
