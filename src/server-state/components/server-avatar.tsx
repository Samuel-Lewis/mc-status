import React from "react";
import { Avatar } from "@mantine/core";
import { Payload } from "../types";

type ServerAvatarProps = {
  favicon: Payload["favicon"];
};

const defaultAvatarSrc = `${process.env.PUBLIC_URL}/grassblock.jpg`;

export const ServerAvatar: React.FC<ServerAvatarProps> = ({ favicon }) => {
  return <Avatar src={favicon ?? defaultAvatarSrc} size={128} />;
};
