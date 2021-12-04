import "antd/dist/antd.css";
import "./App.less";
import {
    Button,
    Divider,
    Form,
    Input,
    Layout
} from "antd";
import React from "react";
import { ServerList } from "./server-list";
import { ServerStatus } from "./server-state";

const { Header, Footer, Content } = Layout;

function App() {
  const params = new URLSearchParams(window.location.search);
  const paramIp = params.get("ip");

  const onFinish = (values: { ip?: string }) => {
    if (values.ip) {
      params.set("ip", values.ip);
      window.location.search = params.toString();
    }
  };

  return (
    <Layout className="layout">
      <Header className="layout-header">
        <h2 className="layout-header">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/logo512.png`}
            alt="computer logo"
          ></img>
          Minecraft Server Status
        </h2>
      </Header>
      <Content className="layout-content">
        <Form
          style={{ textAlign: "center" }}
          name="basic"
          layout="vertical"
          size="large"
          initialValues={{ ip: paramIp }}
          onFinish={onFinish}
        >
          <Form.Item label="Server IP:" name="ip">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Go!
            </Button>
          </Form.Item>
        </Form>
        <Divider />
        {!paramIp && <ServerList />}
        {paramIp && <ServerStatus key={paramIp} address={paramIp} />}
      </Content>
      <Footer className="layout-footer">
        Created by <a href="https://github.com/Samuel-Lewis">Samuel Lewis</a> |{" "}
        Avatars by <a href="https://crafatar.com">Crafatar</a>
      </Footer>
    </Layout>
  );
}

export default App;
