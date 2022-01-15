import React from "react";
import {
    Accordion,
    Code,
    Divider,
    Group
} from "@mantine/core";
import { MotD } from "./components/motd";
import { Online } from "./components/online";
import { PlayerCount } from "./components/player-count";
import { PlayerList } from "./components/player-list";
import { ServerAvatar } from "./components/server-avatar";
import { Version } from "./components/version";
import { Payload } from "./types";

const { Item } = Accordion;

type DetailsProps = {
  data: Payload;
};

const Details: React.FC<DetailsProps> = ({ data }) => {
  return (
    <>
      <Group>
        <ServerAvatar favicon={data.favicon} />
        <div>
          <Online online={data.online} />
          <PlayerCount players={data.players} />
          <Version server={data.server} />
          <MotD motd={data.motd} />
        </div>
      </Group>

      <PlayerList players={data.players} />

      <Divider />

      <Accordion offsetIcon={false}>
        <Item label="Raw data">
          <Code block>{JSON.stringify(data, null, 2)}</Code>
        </Item>
      </Accordion>
    </>
  );
};

export default Details;
