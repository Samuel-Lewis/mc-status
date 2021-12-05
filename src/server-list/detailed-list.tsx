import {
    Button,
    List,
    Tooltip,
    Typography
} from "antd";
import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { SearchEntry } from "./types";

const { Item } = List;
const { Title } = Typography;

export type DetailedListProps = {
  servers: SearchEntry[];
  title: string;
  onDelete?: (server: SearchEntry) => void;
};

export const DetailedList: React.FunctionComponent<DetailedListProps> = ({
  servers,
  title,
  onDelete,
}) => {
  if (servers.length === 0) {
    return null;
  }

  const toParam = (url: string) => {
    const fullUrl = new URL(window.location.href);
    fullUrl.searchParams.append("ip", url);
    return fullUrl.href;
  };

  const deleteButton = (item: SearchEntry) =>
    onDelete ? (
      <Tooltip title="Remove server">
        <Button
          shape="circle"
          type="text"
          icon={<CloseOutlined style={{ color: "rgba(0, 0, 0, 0.45)" }} />}
          onClick={() => onDelete(item)}
        />
      </Tooltip>
    ) : null;

  return (
    <>
      <Title level={3}>{title}</Title>
      <List
        itemLayout="horizontal"
        dataSource={servers}
        size="large"
        renderItem={(item) => (
          <Item actions={[deleteButton(item)]}>
            <Item.Meta
              title={<a href={toParam(item.url)}>{item.url}</a>}
              description={item.name}
            />
          </Item>
        )}
      />
    </>
  );
};
