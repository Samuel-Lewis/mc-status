import React, {
    useEffect,
    useState
} from "react";
import { DetailedList } from "./detailed-list";
import { getLocalServers } from "./local-servers";
import { SearchEntry } from "./types";

const popularServers = [
  { name: "Hypixel", url: "mc.hypixel.net" },
  { name: "2b2t", url: "2b2t.org" },
  { name: "MineTower", url: "minetower.serv.gs" },
  { name: "HiveMC", url: "hivemc.com" },
];

export const ServerList = () => {
  const [localServers, setLocalServers] = useState<SearchEntry[]>([]);

  useEffect(() => {
    getLocalServers().then((servers) => setLocalServers(servers));
  }, [setLocalServers]);

  return (
    <>
      <DetailedList title="Popular servers" servers={popularServers} />
      <DetailedList title="Recent servers" servers={localServers} />
    </>
  );
};
