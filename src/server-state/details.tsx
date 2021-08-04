import React from "react";
import { Collapse, Row, Col, Divider } from "antd";
import { ServerAvatar } from "./components/server-avatar";
import { Online } from "./components/online";
import { PlayerCount } from "./components/player-count";
import { PlayerList } from "./components/player-list";
import { MotD } from "./components/motd";
import { Payload } from "./types";

type DetailsProps = {
  data: Payload;
};

const Details: React.FunctionComponent<DetailsProps> = ({ data }) => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col flex="128px">
          <ServerAvatar src={data.favicon} />
        </Col>
        <Col style={{ textAlign: "initial" }}>
          <Online status={data.online} />
          <PlayerCount players={data.players} />
          <MotD motd={data.motd} />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <PlayerList players={data.players} />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Divider />
          <Collapse ghost style={{ textAlign: "initial" }}>
            <Collapse.Panel header="Raw Data" key="1">
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </Collapse.Panel>
          </Collapse>
        </Col>
      </Row>
    </>
  );
};

export default Details;
