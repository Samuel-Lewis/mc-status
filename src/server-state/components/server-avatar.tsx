import React from "react";
import { Avatar } from "antd";

import { Payload } from "../types";

type ServerAvatarProps = {
  favicon: Payload["favicon"];
};

const defaultAvatarSrc = `${process.env.PUBLIC_URL}/grassblock.jpg`;

export const ServerAvatar: React.FunctionComponent<ServerAvatarProps> = ({
  favicon,
}) => {
  return <Avatar src={favicon ?? defaultAvatarSrc} size={128} shape="square" />;
};
