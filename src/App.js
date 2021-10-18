import "./App.css";
import { useState } from "react";
import Section from "./components/Section";
import styled from "styled-components";

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

  return (
    <Wrapper>
      <Title>
        Internal Medicine Training (IMT) Application Points Calculator
      </Title>

      <Section setSection={setSec1} data={data[0]} />
      <Section setSection={setSec2} data={data[1]} />
      <Section setSection={setSec3} data={data[2]} />
      <Section setSection={setSec4} data={data[3]} />
      <Section setSection={setSec5} data={data[4]} />
      <Section setSection={setSec6p1} data={data[5]} />
      <Section setSection={setSec6p2} data={data[6]} />
      <Section setSection={setSec7} data={data[7]} />
      <Section setSection={setSec8} data={data[8]} />

      <p>
        Total:
        {sec1 + sec2 + sec3 + sec4 + sec5 + sec6p1 + sec6p2 + sec7 + sec8}
      </p>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  margin: 2% 5%;
  overflow-x: hidden;
`;
const Title = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 1.9em;
  font-family: "Lato", sans-serif;
  padding: 8px 0;
  font-weight: 700;
  border-bottom: 1px solid #af3c43;
`;
