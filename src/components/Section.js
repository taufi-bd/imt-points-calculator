import React from "react";
import styled from "styled-components";

const Sec1 = ({ setSection, data }) => {
  function handleChange(e) {
    const newValue = Number(e.target.value);
    setSection(newValue);
  }
  return (
    <Section>
      <Title>{data.title}</Title>
      <Question>{data.question}</Question>
      <Wrapper>
        <Select onChange={handleChange}>
          {data.questionData.map((item, index) => (
            <Option key={index} value={item.value}>
              {item.choice}
            </Option>
          ))}
        </Select>
      </Wrapper>
    </Section>
  );
};

export default Sec1;

const Section = styled.section`
  margin-bottom: 30px;
`;

const Title = styled.h3`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  margin: 8px 0;
  padding: 4px 4px;
  background-color: #f8f8ff;
`;

const Question = styled.h2`
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #333;
  padding: 4px 4px;
`;

const Wrapper = styled.div`
  margin: 4px 10px 4px 0;
  padding: 4px 4px 0px 0;
`;

const Select = styled.select`
  font-family: "Noto Sans", sans-serif;
  max-width: 98%;
  height: 50px;
  background: white;
  color: #333;
  padding-left: 8px;
  font-size: 17px;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  margin-left: 10px;
`;

const Option = styled.option`
  color: red;
`;
