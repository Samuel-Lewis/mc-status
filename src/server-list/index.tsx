import {
    Col,
    Row
} from "antd";
import React, {
    useCallback,
    useEffect,
    useState
} from "react";
import { DetailedList } from "./detailed-list";
import {
    getLocalServers,
    removeSearch
} from "./local-servers";
import { SearchEntry } from "./types";

const popularServers = [
  { name: "Hypixel", url: "mc.hypixel.net" },
  { name: "2b2t", url: "2b2t.org" },
  { name: "Mineplex (US)", url: "us.mineplex.com" },
  { name: "MineTower", url: "minetower.serv.gs" },
];

export const ServerList = () => {
  const [localServers, setLocalServers] = useState<SearchEntry[]>([]);
  const onDelete = useCallback(
    (item: SearchEntry) => {
      removeSearch(item.url).then(() => {
        getLocalServers().then((servers) => setLocalServers(servers));
      });
    },
    [setLocalServers]
  );

  useEffect(() => {
    getLocalServers().then((servers) => setLocalServers(servers));
  }, [setLocalServers]);

  return (
    <Row gutter={16}>
      <Col span={12} flex="auto">
        <DetailedList title="Popular servers" servers={popularServers} />
      </Col>
      <Col span={12} flex="auto">
        <DetailedList
          title="Recent servers"
          servers={localServers}
          onDelete={onDelete}
        />
      </Col>
    </Row>
  );
};
