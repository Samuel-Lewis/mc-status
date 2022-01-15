import motdparser from "mcmotdparser";
import React, {
    useEffect,
    useState
} from "react";
import { Payload } from "../types";

type MotdProps = {
  motd: Payload["motd"];
};

export const MotD: React.FC<MotdProps> = ({ motd }) => {
  const [motdHtml, setMotdHtml] = useState("");
  useEffect(() => {
    motdparser.toHtml(motd, (_: any, res: any) => setMotdHtml(res));
  }, [motd]);

  if (!motd?.trim()) {
    return null;
  }

  return <div dangerouslySetInnerHTML={{ __html: motdHtml }}></div>;
};
