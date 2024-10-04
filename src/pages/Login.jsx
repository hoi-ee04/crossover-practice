import styled from "styled-components";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";
import BigButton from "../components/BigButton";

const Login = () => {
  return (
    <LoginPage>
      <Container>
        <Title>로그인</Title>
        <LoginBox>
          <InputBox
            inputText="아이디"
            explainText="영문과 숫자를 조합하여 5~10글자 미만으로 입력하여 주세요."
          />
          <InputBox
            inputText="비밀번호"
            explainText="영문과 숫자, 특수기호를 조합하여 8~14글자 미만으로 입력하여 주세요."
          />
          <ButtonContainer>
            <BigButton buttonName="로그인" />
            <Link to="/join">
              <JoinButton>회원가입</JoinButton>
            </Link>
          </ButtonContainer>
        </LoginBox>
      </Container>
    </LoginPage>
  );
};

const LoginPage = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 56%;
  min-height: 470px;
  align-items: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-items: end;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.mainTitle};
  margin: 10%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 6%;
`;

const JoinButton = styled.p`
  ${({ theme }) => theme.fonts.subTitle};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 20%;
`;

export default Login;
