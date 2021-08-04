import React, { useEffect, useState } from "react";
import motdparser from "mcmotdparser";

import { Payload } from "../types";

export const MotD: React.FunctionComponent<Payload> = ({ motd }) => {
  const [motdHtml, setMotdHtml] = useState("");
  useEffect(() => {
    motdparser.toHtml(motd, (err: any, res: any) => setMotdHtml(res));
  }, [motd]);

  if (!motd?.trim()) {
    return null;
  }

  return <div dangerouslySetInnerHTML={{ __html: motdHtml }}></div>;
};
