import SVG from "../../public/adorned-rose-on-pink-perfect.svg";
import { styled } from "@app/theme";

export default function Shield() {
  return <ShieldSVG />;
}

const ShieldSVG = styled(SVG, {
  position: "relative",
  width: "100%",
  height: "100%",
  zIndex: 1,
});
