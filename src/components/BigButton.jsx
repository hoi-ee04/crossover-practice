import styled from "styled-components";

const BigButton = ({ buttonName }) => {
  return (
    <BigButtonContainer>
      <Text>{buttonName}</Text>
    </BigButtonContainer>
  );
};

const BigButtonContainer = styled.div`
  display: flex;
  width: 28.125vw;
  min-width: 100px;
  height: 90px;
  justify-content: center;
  align-items: center;
  border-radius: 1.3vw;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.button};
  color: white;
`;

export default BigButton;
