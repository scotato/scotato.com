import Head from "next/head";
import { styled } from "@app/theme";
import Shield from "@app/components/Shield";
import Background from "@app/components/Background";

export default function Home() {
  return (
    <Container>
      <Background />
      <Head>
        <title>Design ⌘ Software</title>
      </Head>
      <Link href="https://shields.build/shield/565" target="_blank">
        <Shield />
      </Link>
    </Container>
  );
}

const Container = styled("div", {
  height: "100vh",
});

const Link = styled("a", {
  fontFamily: "$system",
  textDecoration: "none",
  color: "$purple600",
});
