import { Typography } from "antd";
import React from "react";
import { ModalScreen } from "./modal-screen";

const { Paragraph: P, Text: T, Link, Title } = Typography;

const About = () => (
  <>
    <P>
      This site is an ad-free, lightweight way to check the status of your
      favourite Minecraft server.
    </P>
    <P>Currently, the site only supports Java servers.</P>
    <P>
      This site is basically always under development, as I use it for a
      platform for learning web development. If there are any questions,
      suggestions, feedback or bugs, you can raise an{" "}
      <Link href="https://github.com/Samuel-Lewis/mc-status/issues">
        issue on the GitHub repo
      </Link>
      .
    </P>
    <P>
      Created using
      <ul>
        <li>
          API queries by <Link href="https://mcapi.us/">MC API</Link>
        </li>
        <li>
          Player information by{" "}
          <Link href="https://api.minetools.eu/">MineTools</Link> and{" "}
          <Link href="https://namemc.com/">NameMC</Link>
        </li>
        <li>
          Avatars by <Link href="https://crafatar.com">Crafatar</Link>
        </li>
        <li>
          <Link href="https://reactjs.org/">React</Link> and{" "}
          <Link href="https://ant.design/">Ant Design</Link>
        </li>
      </ul>
    </P>
  </>
);

const FAQ = () => (
  <>
    <Title level={4}>Why is my server not showing up?</Title>
    <P>
      There are a few reasons your server may not be showing up
      <ol>
        <li>The server maybe offline</li>
        <li>
          The server <T code>enable-status</T> may be set to <T code>false</T>
        </li>
        <li>
          There is a bug in my code 😞. You can raise an{" "}
          <Link href="https://github.com/Samuel-Lewis/mc-status/issues">
            issue on the GitHub repo
          </Link>
          .
        </li>
      </ol>
    </P>
    <Title level={4}>
      How come some servers show more details than others?
    </Title>
    <P>
      Ultimately, servers can show as much or as little as they want. If you
      want to show more detailed information on your server, set{" "}
      <T code>enable-status</T> and <T code>enable-query</T> to <T code>true</T>{" "}
      in your <T code>server.properties</T>. Remember though, this is
      information shared to the public. Check that there is nothing
      unintentional being exposed or that you have measures to protect your
      server if needed.
    </P>
    <Title level={4}>Why do some player lists look weird or empty?</Title>
    <P>
      As above, servers can show what they like. Some servers take the
      opportunity to show ads, extra server information, a subset of players, or
      maybe, no players at all.
    </P>
    <Title level={4}>How do I donate or contribute?</Title>
    <P>
      This website costs me zero dollars per year to run as it relies on
      existing free services. While it's a kind notion, you hang on to it for a
      rainy day 😉. If you really want to contribute, the code is open-source on{" "}
      <Link href="https://github.com/Samuel-Lewis/mc-status">GitHub</Link>.
    </P>
  </>
);

export const InfoLinks: React.FunctionComponent = () => {
  return (
    <>
      <ModalScreen title={"About"}>
        <About />
      </ModalScreen>
      |
      <ModalScreen title={"FAQ"}>
        <FAQ />
      </ModalScreen>
    </>
  );
};
