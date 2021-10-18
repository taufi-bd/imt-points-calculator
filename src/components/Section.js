import React, { useState } from "react";
import styled from "styled-components";
import { devices } from "../devices";

const Sec1 = ({ setSection, data, section }) => {
  function handleChange(e) {
    const newValue = Number(e.target.value);
    setSection(newValue);
  }

  const [readMore, setReadMore] = useState(false);

  const extraContent = <p>{data.notes}</p>;

  const linkName = readMore
    ? "Click / Tap to collapse"
    : "Click / Tap here to read Notes";
  return (
    <Section>
      <Title>{data.title}</Title>
      <Question>{data.question}</Question>
      <Notes>
        <Link
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {linkName}
        </Link>
        {readMore && extraContent}
      </Notes>
      <Wrapper>
        <Select value={section} onChange={handleChange}>
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
  padding: 20px 0;
  border-bottom: 1px solid #f4f4f4;
  &:last-child {
    border: none;
    padding-bottom: 40px;
  }
  @media ${devices.tablet} {
    padding: 18px 0;
  }
  @media ${devices.laptop} {
    padding: 16px 0;
  }
  @media ${devices.desktop} {
    padding: 10px 0;
    border: none;
  }
`;

const Title = styled.h3`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  margin: 8px 0;
  padding: 6px 4px;
  background-color: #f8f8ff;
  color: #002d4f;
  font-size: 16px;
  @media ${devices.tablet} {
    font-size: 16px;
  }
  @media ${devices.laptop} {
    font-size: 17px;
  }
  @media ${devices.desktop} {
    font-size: 18px;
  }
`;

const Question = styled.h2`
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-size: 17px;
  line-height: 1.5em;
  color: #002d4f;
  padding: 4px 4px;
  @media ${devices.tablet} {
    font-size: 17px;
  }
  @media ${devices.laptop} {
    font-size: 19px;
  }
  @media ${devices.desktop} {
    font-size: 20px;
  }
`;

const Notes = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 15px;
  line-height: 1.8em;
  color: #333;
  padding: 4px 10px;
  @media ${devices.tablet} {
    font-size: 16px;
  }
  @media ${devices.laptop} {
    font-size: 17px;
  }
  @media ${devices.desktop} {
    font-size: 18px;
  }
`;

const Link = styled.p`
  display: inline;
  font-weight: bold;
  cursor: pointer;
  background-color: #d2f8d2;
  padding: 4px 8px;
  font-size: 13px;
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
  color: #002d4f;
  padding-left: 8px;
  font-size: 17px;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  margin-left: 10px;
`;

const Option = styled.option`
  color: #002d4f;
  font-size: 17px;
`;
