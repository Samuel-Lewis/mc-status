import React from "react";
import { Divider, List, Popover } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

import { PlayerItem } from "./player-item";
import { Payload } from "../types";

export const PlayerList: React.FunctionComponent<{ data: Payload }> = ({
  data,
}) => {
  const playerMap = new Map<string, string | undefined>();
  data?.players?.list?.forEach((p) => playerMap.set(p, undefined));
  data?.players?.sample?.forEach((p) => playerMap.set(p.name!, p.id!));

  console.log("PLAYERMAP", playerMap);
  if (playerMap.size === 0) {
    return null;
  }

  const InfoContent = (
    <div style={{ width: "300px" }}>
      <p>
        Servers are able to control a "sample" of players online, and may use
        this for extra metadata or advertisment.
      </p>
      <p>Ocassionaly, servers may also report nicknames.</p>
    </div>
  );
  const InfoPopover = (
    <Popover
      content={InfoContent}
      title={"Why are there weird names sometimes?"}
      placement="topLeft"
    >
      <QuestionCircleOutlined />
    </Popover>
  );

  return (
    <>
      <Divider orientation="left">Player List {InfoPopover}</Divider>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
          xxl: 5,
        }}
        dataSource={Array.from(playerMap)}
        size="large"
        renderItem={([name, id]) => (
          <List.Item>
            <PlayerItem player={{ name, id }} />
          </List.Item>
        )}
      />
    </>
  );
};
