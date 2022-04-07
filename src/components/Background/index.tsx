import { BubbleLeft, BubbleRight, Logo } from "./styles";
import LogoImg from "../../assets/logo.svg";
import BubbleRightImg from "../../assets/vector-r.svg";
import BubbleLeftImg from "../../assets/vector-l.svg";

export function Background() {
  return (
    <>
      <Logo src={LogoImg} />
      <BubbleLeft src={BubbleLeftImg} alt="bubble" />
      <BubbleRight src={BubbleRightImg} alt="bubble" />
    </>
  );
}
