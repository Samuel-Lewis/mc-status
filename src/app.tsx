import "./App.css";
import React from "react";
import ReactGA from "react-ga4";
import {
    AppShell,
    Button,
    Center,
    Divider,
    Group,
    Header,
    Image,
    MantineProvider,
    Paper,
    Space,
    Text as T,
    TextInput,
    Title,
    TypographyStylesProvider
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { InfoLinks } from "./info-links";
import { ServerList } from "./server-list";
import { ServerStatus } from "./server-state";

try {
  ReactGA.initialize(process.env.REACT_APP_GA_ID || "");
} catch (err) {
  console.error("GA initialization failed", err);
}

function App() {
  const params = new URLSearchParams(window.location.search);
  const paramIp = params.get("ip");

  const form = useForm<{ ip: string }>({
    initialValues: {
      ip: paramIp ?? "",
    },
  });

  const submitCallback = (values: typeof form["values"]) => {
    if (values.ip) {
      params.set("ip", values.ip);
      window.location.search = params.toString();
    }
  };

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "light" }}
    >
      <TypographyStylesProvider>
        <AppShell
          styles={(theme) => ({
            root: {
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bright-squares.png)`,
              height: "100%",
              minHeight: "100vh",
            },
          })}
          header={
            <MantineProvider theme={{ colorScheme: "dark" }}>
              <Header height={64}>
                <a href={process.env.PUBLIC_URL}>
                  <Group>
                    <Image
                      sx={{ padding: "8px", width: "64px", height: "64px" }}
                      src={`${process.env.PUBLIC_URL}/logo512.png`}
                    />
                    <Title order={2} style={{ margin: 0 }}>
                      Minecraft Server Status
                    </Title>
                  </Group>
                </a>
              </Header>
            </MantineProvider>
          }
        >
          <Paper padding="xl">
            <Group position="center" direction="column" grow>
              <form onSubmit={form.onSubmit(submitCallback)}>
                <TextInput
                  required
                  size="lg"
                  label="Server IP"
                  placeholder="mc.hypixel.net"
                  {...form.getInputProps("ip")}
                />
                <Space h="xl" />
                <Center>
                  <Button fullWidth type="submit" style={{ maxWidth: 300 }}>
                    Go!
                  </Button>
                </Center>
              </form>
            </Group>
            <InfoLinks />
            <Divider />
            {!paramIp && <ServerList />}
            {paramIp && <ServerStatus key={paramIp} address={paramIp} />}
          </Paper>

          <Center style={{ height: "60px" }}>
            <span>
              Created by{" "}
              <T
                variant="link"
                component="a"
                href="https://samuel-lewis.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Samuel Lewis
              </T>
            </span>
          </Center>
        </AppShell>
      </TypographyStylesProvider>
    </MantineProvider>
  );
}

export default App;
