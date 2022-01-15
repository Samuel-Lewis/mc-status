import React, {
    useEffect,
    useState
} from "react";
import {
    Avatar,
    Group,
    Skeleton,
    Text as T
} from "@mantine/core";
import { Player } from "../types";

type PlayerItemProps = {
  player: Player;
};

export const PlayerItem: React.FC<PlayerItemProps> = ({ player }) => {
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
  }, [name, uuid, id]);

  return (
    <Group direction="row" sx={{ height: "60px" }}>
      {uuid ? (
        <Avatar src={`https://crafatar.com/renders/head/${uuid}?overlay`} />
      ) : (
        <Skeleton height={38} width={38} />
      )}
      <T
        lineClamp={1}
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://namemc.com/profile/${name}`}
      >
        {name}
      </T>
    </Group>
  );
};
