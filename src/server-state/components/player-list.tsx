import React, { useState, useEffect } from "react";
import { Divider, List } from "antd";

import { PlayerItem } from "./player-item";

const proxy = "https://cors-anywhere.herokuapp.com/";

export const PlayerList = (props: { data?: { list?: string[] } }) => {
  const [uuids, setUuids] = useState([]);
  useEffect(() => {
    if (!props.data || !props.data.list || props.data.list.length === 0) {
      return;
    }
    const list = props.data.list;
    fetch(`${proxy}https://api.mojang.com/profiles/minecraft`, {
      method: "POST",
      body: JSON.stringify(list),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log({ response });
        setUuids(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props]);

  return (
    <>
      <Divider orientation="left">Player List</Divider>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={uuids}
        size="large"
        renderItem={(item) => (
          <List.Item>
            <PlayerItem {...item} />
          </List.Item>
        )}
      />
    </>
  );
};
