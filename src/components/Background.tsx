import SVG from "../../public/wavy-II.svg";
import { styled } from "@app/theme";

export default function Background() {
  return (
    <Container>
      <Wavy />
    </Container>
  );
}

const Container = styled("div", {
  display: "flex",
  position: "fixed",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  top: 0,
  left: 0,
  zIndex: 0,
});

const Wavy = styled(SVG, {
  position: "absolute",
  width: "100%",
  height: "100%",
});
