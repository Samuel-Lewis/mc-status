import React, { useState, useEffect } from "react";

import { List, Avatar } from "antd";

export const PlayerItem = (props: { name: string }) => {
  const [uuid, setUuid] = useState("");
  const { name } = props;

  useEffect(() => {
    fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
      .then((res) => res.json())
      .then((response) => {
        setUuid(response.id);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [name]);

  return (
    <List.Item.Meta
      avatar={<Avatar src={`https://crafatar.com/avatars/${uuid}`} />}
      title={name}
    />
  );
};
