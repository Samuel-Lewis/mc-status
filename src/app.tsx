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
    TextInput
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { InfoLinks } from "./info-links";
import { ServerList } from "./server-list";
import { ServerStatus } from "./server-state";
import { WithTheme } from "./theme";

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
    <WithTheme
      render={(_, ThemeToggle) => (
        <AppShell
          padding="md"
          styles={(_) => ({
            root: {
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bright-squares.png)`,
              height: "100%",
              minHeight: "100vh",
            },
          })}
          header={
            <MantineProvider theme={{ colorScheme: "dark" }}>
              <Header height={60} padding="xs">
                <Group position="apart">
                  {/* Navigation Items */}

                  <Group spacing="xs">
                    {/* Logo */}
                    <Image
                      sx={{ height: "38px", width: "38px" }}
                      src={`${process.env.PUBLIC_URL}/logo512.png`}
                    />
                    <T
                      component="a"
                      href={process.env.PUBLIC_URL}
                      variant="gradient"
                      size="xl"
                      weight={700}
                      gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                    >
                      Minecraft Server Status
                    </T>
                  </Group>

                  {/* Theme toggle */}
                  {ThemeToggle}
                </Group>
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
            <T>
              Created by{" "}
              <T
                component="a"
                variant="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://samuel-lewis.com"
              >
                Samuel Lewis
              </T>
            </T>
          </Center>
        </AppShell>
      )}
    />
  );
}

export default App;
