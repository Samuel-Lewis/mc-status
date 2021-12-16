import {
    Avatar,
    List
} from "antd";
import React, {
    useEffect,
    useState
} from "react";
import { Player } from "../types";

type PlayerItemProps = {
  player: Player;
};

export const PlayerItem: React.FunctionComponent<PlayerItemProps> = ({
  player,
}) => {
  const { name, id } = player;

  const [uuid, setUuid] = useState(id);
  useEffect(() => {
    if (!name || uuid) {
      return;
    }

    fetch(`https://api.minetools.eu/uuid/${name}`)
      .then((res) => res.json())
      .then((response) => {
        setUuid(response.id);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [name, uuid]);

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
          href={`https://namemc.com/profile/${name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      }
    />
  );
};
