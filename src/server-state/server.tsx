import React from "react";
import { Collapse, Row, Col, Divider } from "antd";

import Loading from "./loading";
import Error from "./error";

import { ServerAvatar } from "./components/server-avatar";
import { Online } from "./components/online";
import { PlayerCount } from "./components/player-count";
import { PlayerList } from "./components/player-list";

export type Payload = {
  status: string;
  online: boolean;
  error?: string;
  motd?: string;
  favicon?: string;
  version?: string;
  game_type?: string;
  game_id?: any;
  server_mod?: string;
  map?: any;
  players?: {
    max?: number;
    now?: number;
    list?: any[];
  };
  plugins?: any[];
  last_online?: string;
  last_updated?: string;
  duration?: number;
};

export type ServerProps = {
  address: string;
};

export type ServerState = {
  loading: boolean;
  data?: Payload;
  error?: Error;
};

export class ServerStatus extends React.Component<ServerProps, ServerState> {
  constructor(props: ServerProps) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    fetch(`https://mcapi.us/server/status?ip=${this.props.address}`)
      .then((response) => response.json())
      .then((data) => {
        if (!this.state.data) {
          this.setState({ data, loading: false });
        }
      })
      .catch((error) => {
        this.setState({ error, loading: false });
        console.error(error);
      });

    fetch(`https://mcapi.us/server/query?ip=${this.props.address}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.online) {
          this.setState({ data, loading: false });
        }
      })
      .catch((error) => {
        this.setState({ error, loading: false });
        console.error(error);
      });
  }

  render() {
    const { loading, data, error } = this.state;
    if (error) {
      return <Error message={error.message} />;
    }

    if (loading) {
      return <Loading />;
    }

    if (!data || data.error || data.status === "error") {
      return <Error message={data ? data.error : "No data found??"} />;
    }

    return (
      <>
        <Row gutter={[16, 16]}>
          <Col flex="128px">
            <ServerAvatar src={data.favicon} />
          </Col>
          <Col style={{ textAlign: "initial" }}>
            <Online status={data.online} />
            <PlayerCount data={data.players} />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <PlayerList data={data.players} />
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
  }
}
