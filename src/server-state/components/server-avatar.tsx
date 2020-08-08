import React from "react";
import { Avatar } from "antd";

const defaultAvatarSrc = `${process.env.PUBLIC_URL}/grassblock.jpg`;

export const ServerAvatar = (props: { src?: string }) => {
  return (
    <Avatar src={props.src || defaultAvatarSrc} size={128} shape="square" />
  );
};
