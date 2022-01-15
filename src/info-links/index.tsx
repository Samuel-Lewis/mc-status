import React from "react";
import {
    Center,
    Code,
    List,
    Text as T,
    Title
} from "@mantine/core";
import { ModalScreen } from "./modal-screen";

const { Item } = List;

const About = () => (
  <>
    <p>
      This site is an ad-free, lightweight way to check the status of your
      favourite Minecraft server.
    </p>
    <p>Currently, the site only supports Java servers.</p>
    <p>
      This site is basically always under development, as I use it for a
      platform for learning web development. If there are any questions,
      suggestions, feedback or bugs, you can raise an{" "}
      <T
        variant="link"
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Samuel-Lewis/mc-status/issues"
      >
        issue on the GitHub repo
      </T>
      .
    </p>

    <p>Created using</p>
    <List>
      <Item>
        API queries by{" "}
        <T
          variant="link"
          component="a"
          href="https://mcapi.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MC API
        </T>
      </Item>
      <Item>
        Player information by{" "}
        <T
          variant="link"
          component="a"
          href="https://api.minetools.eu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MineTools
        </T>{" "}
        and{" "}
        <T
          variant="link"
          component="a"
          href="https://namemc.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NameMC
        </T>
      </Item>
      <Item>
        Avatars by{" "}
        <T
          variant="link"
          component="a"
          href="https://crafatar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crafatar
        </T>
      </Item>
      <Item>
        <T
          variant="link"
          component="a"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </T>{" "}
        and{" "}
        <T
          variant="link"
          component="a"
          href="https://mantine.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mantine
        </T>
      </Item>
    </List>
  </>
);

const FAQ = () => (
  <>
    <Title order={5}>Why is my server not showing up?</Title>
    <p>There are a few reasons your server may not be showing up</p>
    <List>
      <Item>The server maybe offline</Item>
      <Item>
        The server <Code>enable-status</Code> may be set to <Code>false</Code>
      </Item>
      <Item>
        There is a bug in my code 😞. You can raise an{" "}
        <T
          variant="link"
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Samuel-Lewis/mc-status/issues"
        >
          issue on the GitHub repo
        </T>
        .
      </Item>
    </List>
    <Title order={5}>
      How come some servers show more details than others?
    </Title>
    <p>
      Ultimately, servers can show as much or as little as they want. If you
      want to show more detailed information on your server, set{" "}
      <Code>enable-status</Code> and <Code>enable-query</Code> to{" "}
      <Code>true</Code> in your <Code>server.properties</Code>. Remember though,
      this is information shared to the public. Check that there is nothing
      unintentional being exposed or that you have measures to protect your
      server if needed.
    </p>
    <Title order={5}>
      Why do some player lists look weird, incomplete, or empty?
    </Title>
    <p>
      As above, servers can show what they like. Some servers take the
      opportunity to show ads, extra server information, a subset of players, or
      maybe, no players at all. As of Minecraft 1.18, players are able to
      opt-out of server queries, and hence will not be shown in the player list.
    </p>
    <Title order={5}>How do I donate or contribute?</Title>

    <p>
      This website costs me zero dollars per year to run as it relies on
      existing free services. While it's a kind notion, you hang on to it for a
      rainy day 😉. If you really want to contribute, the code is open-source on{" "}
      <T
        variant="link"
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Samuel-Lewis/mc-status"
      >
        GitHub
      </T>
      .
    </p>
  </>
);

export const InfoLinks: React.FC = () => {
  return (
    <Center style={{ padding: "8px" }}>
      <ModalScreen title={"About"}>
        <About />
      </ModalScreen>
      <ModalScreen title={"FAQ"}>
        <FAQ />
      </ModalScreen>
    </Center>
  );
};
