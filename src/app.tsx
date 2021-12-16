import "antd/dist/antd.css";
import "./App.less";
import {
    Button,
    Divider,
    Form,
    Input,
    Layout,
    Typography
} from "antd";
import React from "react";
import ReactGA from "react-ga4";
import { GlobalOutlined } from "@ant-design/icons";
import { InfoLinks } from "./info-links";
import { ServerList } from "./server-list";
import { ServerStatus } from "./server-state";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

try {
  ReactGA.initialize(process.env.REACT_APP_GA_ID || "");
} catch (err) {
  console.error("GA initialization failed", err);
}

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
    <Layout className="app">
      <Header className="header">
        <a href={`${process.env.PUBLIC_URL}`}>
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/logo512.png`}
            alt=""
          ></img>
          <h2>Minecraft Server Status</h2>
        </a>
      </Header>
      <Content className="content">
        <Form
          style={{ textAlign: "center" }}
          name="basic"
          layout="vertical"
          size="large"
          initialValues={{ ip: paramIp }}
          onFinish={onFinish}
        >
          <Title level={3}>Quickly check your Minecraft server status!</Title>
          <Form.Item name="ip">
            <Input prefix={<GlobalOutlined />} placeholder="Server IP" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ maxWidth: "300px", width: "100%" }}
            >
              Go!
            </Button>
          </Form.Item>
          <InfoLinks />
        </Form>
        <Divider />
        {!paramIp && <ServerList />}
        {paramIp && <ServerStatus key={paramIp} address={paramIp} />}
      </Content>
      <Footer className="footer">
        Created by <a href="https://samuel-lewis.com">Samuel Lewis</a>
      </Footer>
    </Layout>
  );
}

export default App;
