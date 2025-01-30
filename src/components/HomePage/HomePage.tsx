import { useState } from "react";
import * as S from "./HomePage.style";
import closetRackImg from "/closet_rack.png";

export default function HomePage() {
  const [familyName, setFAmilyName] = useState("סלומון");
  const headerText = `משפחת ${familyName}`;
  return (
    <S.Container>
      <S.Header>
        <img src={closetRackImg} alt="" />
        <span>{headerText}</span>
      </S.Header>
    </S.Container>
  );
}
