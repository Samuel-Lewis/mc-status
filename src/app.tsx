import React from "react";
import "./App.css";
import { ServerStatus } from "./server-state/server";
import { Typography, Button, Layout, Form, Input, Divider } from "antd";

import "antd/dist/antd.css";

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
      <Header>
        <div className="logo" />
        <Typography.Title>Minecraft Server Status</Typography.Title>
      </Header>
      <Content className="layout-content">
        <Form
          name="basic"
          layout="vertical"
          size="large"
          initialValues={{ ip: paramIp }}
          onFinish={onFinish}
        >
          <Form.Item label="Server IP" name="ip">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Go!
            </Button>
          </Form.Item>
        </Form>

        <Divider />

        {paramIp && <ServerStatus key={paramIp} address={paramIp} />}
      </Content>
      <Footer className="layout-footer">
        Created by Samuel Lewis |{" "}
        <a href="https://github.com/Samuel-Lewis">GitHub</a>
      </Footer>
    </Layout>
  );
}

export default App;
