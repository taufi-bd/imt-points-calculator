import "./App.css";
import { useState } from "react";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { devices } from "./devices";

import data from "./data/data.json";

function App() {
  const [sec1, setSec1] = useState(0);
  const [sec2, setSec2] = useState(0);
  const [sec3, setSec3] = useState(0);
  const [sec4, setSec4] = useState(0);
  const [sec5, setSec5] = useState(0);
  const [sec6p1, setSec6p1] = useState(0);
  const [sec6p2, setSec6p2] = useState(0);
  const [sec7, setSec7] = useState(0);
  const [sec8, setSec8] = useState(0);

  let total = sec1 + sec2 + sec3 + sec4 + sec5 + sec6p1 + sec6p2 + sec7 + sec8;

  const handleReset = () => {
    setSec1(0);
    setSec2(0);
    setSec3(0);
    setSec4(0);
    setSec5(0);
    setSec6p1(0);
    setSec6p2(0);
    setSec7(0);
    setSec8(0);
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      <Title>
        Internal Medicine Training (IMT) Application Points Calculator
      </Title>
      <Navbar total={total} reset={handleReset} />

      <Section section={sec1} setSection={setSec1} data={data[0]} />
      <Section section={sec2} setSection={setSec2} data={data[1]} />
      <Section section={sec3} setSection={setSec3} data={data[2]} />
      <Section section={sec4} setSection={setSec4} data={data[3]} />
      <Section section={sec5} setSection={setSec5} data={data[4]} />
      <Section section={sec6p1} setSection={setSec6p1} data={data[5]} />
      <Section section={sec6p2} setSection={setSec6p2} data={data[6]} />
      <Section section={sec7} setSection={setSec7} data={data[7]} />
      <Section section={sec8} setSection={setSec8} data={data[8]} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  margin: 2% 5%;
  overflow: hidden;
`;
const Title = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 1.5em;
  font-family: "Lato", sans-serif;
  padding: 60px 0 10px 0;
  line-height: 1.4em;

  font-weight: 700;
  border-bottom: 1px solid #af3c43;
  color: #002d4f;

  @media ${devices.tablet} {
    font-size: 1.7em;
  }

  @media ${devices.laptop} {
    font-size: 1.9em;
  }

  @media ${devices.desktop} {
    font-size: 2.1em;
  }
`;
