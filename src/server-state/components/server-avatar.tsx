import React from "react";
import { Image } from "@mantine/core";
import { Payload } from "../types";

type ServerAvatarProps = {
  favicon: Payload["favicon"];
};

const defaultAvatarSrc = `${process.env.PUBLIC_URL}/grassblock.jpg`;

export const ServerAvatar: React.FC<ServerAvatarProps> = ({ favicon }) => {
  return (
    <Image
      src={favicon ?? defaultAvatarSrc}
      style={{ margin: "auto" }}
      alt=""
      radius="md"
      width={128}
    />
  );
};
