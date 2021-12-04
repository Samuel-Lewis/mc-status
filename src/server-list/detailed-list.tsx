import {
    List,
    Typography
} from "antd";
import React from "react";
import { SearchEntry } from "./types";

const { Item } = List;
const { Title } = Typography;

export type DetailedListProps = {
  servers: SearchEntry[];
  title: string;
};

export const DetailedList: React.FunctionComponent<DetailedListProps> = ({
  servers,
  title,
}) => {
  if (servers.length === 0) {
    return null;
  }

  const toParam = (url: string) => {
    const fullUrl = new URL(window.location.href);
    fullUrl.searchParams.append("ip", url);
    return fullUrl.href;
  };

  return (
    <>
      <Title level={3}>{title}</Title>
      <List
        bordered
        itemLayout="vertical"
        dataSource={servers}
        size="large"
        renderItem={(item) => (
          <Item>
            <Item.Meta
              title={<a href={toParam(item.url)}>{item.name}</a>}
              description={item.url}
            />
          </Item>
        )}
      />
    </>
  );
};
