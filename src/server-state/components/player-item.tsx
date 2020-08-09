import React, { useState, useEffect } from "react";
import { List, Avatar } from "antd";

export const PlayerItem = (props: { name: string }) => {
  const [uuid, setUuid] = useState("");
  useEffect(() => {
    const { name } = props;
    if (!name) {
      return;
    }

    fetch(`https://api.minetools.eu/uuid/${name}`)
      .then((res) => res.json())
      .then((response) => {
        console.log({ response });
        setUuid(response.id);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props]);

  return (
    <List.Item.Meta
      avatar={
        <Avatar
          shape="square"
          size="large"
          src={`https://crafatar.com/renders/head/${uuid}?overlay`}
        />
      }
      title={
        <a
          href={`https://namemc.com/profile/${props.name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.name}
        </a>
      }
    />
  );
};
