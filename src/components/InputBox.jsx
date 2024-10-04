import { useState } from "react";
import styled from "styled-components";

const InputBox = ({ inputText, explainText }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputBoxContainer>
      <InnerContainer>
        <InputText
          type="text"
          value={value}
          placeholder={value ? "" : inputText}
          onChange={handleChange}
        />
      </InnerContainer>
      <ExplainText>{explainText}</ExplainText>
    </InputBoxContainer>
  );
};

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 1%;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 28.125vw;
  min-width: 100px;
  height: 90px;
  border-radius: 1.08vw;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 5.18%;
  align-items: center;
`;

const InputText = styled.input`
  ${({ theme }) => theme.fonts.subText};
  border: none;
  outline: none;
  opacity: 45%;
`;

const ExplainText = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  margin: 10px 0;
  margin-left: 5px;
  opacity: 45%;
`;

export default InputBox;
