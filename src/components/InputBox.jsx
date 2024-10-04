import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as CancelIcon } from "../images/cancelButton.svg";
import { ReactComponent as ErrorIcon } from "../images/errorCircle.svg";
import { ReactComponent as SuccessIcon } from "../images/SuccessCircle.svg";

const InputBox = ({ inputText, explainText, validate, isPassword }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (inputValue) {
      setIsValid(validate(inputValue));
    } else {
      setIsValid(false);
    }
  };

  const handleCancel = () => {
    setValue("");
    setIsValid(false);
  };

  const getBorderColor = () => {
    if (!value) return "gray";
    return isValid ? "green" : "red";
  };

  return (
    <InputBoxContainer>
      <InnerContainer borderColor={getBorderColor()}>
        <InputText
          type={isPassword ? "password" : "text"}
          value={value}
          placeholder={value ? "" : inputText}
          onChange={handleChange}
        />
        <div>
          {value && (isValid ? <Success /> : <Error />)}
          {value && <Cancel onClick={handleCancel} />}
        </div>
      </InnerContainer>
      <ExplainText textColor={getBorderColor()}>{explainText}</ExplainText>
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
  border: 2px solid ${({ theme, borderColor }) => theme.colors[borderColor]};
  padding: 5.18%;
  justify-content: space-between;
  align-items: center;
`;

const InputText = styled.input`
  ${({ theme }) => theme.fonts.subText};
  border: none;
  outline: none;
  opacity: 45%;
`;

const Error = styled(ErrorIcon)`
  margin: 5px;
`;

const Success = styled(SuccessIcon)`
  margin: 5px;
`;

const Cancel = styled(CancelIcon)`
  margin: 5px;
`;

const ExplainText = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  margin: 10px 0;
  margin-left: 5px;
  opacity: 45%;
  color: ${({ theme, textColor }) => theme.colors[textColor]};
`;

export default InputBox;
