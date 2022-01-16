import React from "react";
import { Accordion, Center, Code, Divider, Grid } from "@mantine/core";
import { MotD } from "./components/motd";
import { Online } from "./components/online";
import { PlayerCount } from "./components/player-count";
import { PlayerList } from "./components/player-list";
import { ServerAvatar } from "./components/server-avatar";
import { Version } from "./components/version";
import { Payload } from "./types";

const { Item } = Accordion;
const { Col } = Grid;

type DetailsProps = {
  data: Payload;
};

const Details: React.FC<DetailsProps> = ({ data }) => {
  return (
    <>
      <Grid align="center">
        <Col xs={12} sm={4}>
          <Center>
            <ServerAvatar favicon={data.favicon} />
          </Center>
        </Col>
        <Col xs={12} sm={8}>
          <Online online={data.online} />
          <PlayerCount players={data.players} />
          <Version server={data.server} />
          <MotD motd={data.motd} />
        </Col>
      </Grid>

      <PlayerList players={data.players} />

      <Divider my="lg" />

      <Accordion offsetIcon={false}>
        <Item label="Raw data">
          <Code block>{JSON.stringify(data, null, 2)}</Code>
        </Item>
      </Accordion>
    </>
  );
};

export default Details;
