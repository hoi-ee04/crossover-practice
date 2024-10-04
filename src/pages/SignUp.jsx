import styled from "styled-components";
import InputBox from "../components/InputBox";
import BigButton from "../components/BigButton";
import { ReactComponent as Checkbox } from "../images/nonCheckBox.svg";

const SignUp = () => {
  return (
    <SignUpPage>
      <Container>
        <Title>회원가입</Title>
        <SignUpBox>
          <InputBox
            inputText="아이디"
            explainText="영문과 숫자을 조합하여 5~10글자 미만으로 입력하여 주세요."
          />
          <InputBox
            inputText="비밀번호"
            explainText="영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여 주세요."
          />
          <InputBox
            inputText="이메일"
            explainText="사용하실 이메일을 입력해주세요."
          />
        </SignUpBox>
        <SignUpExplain>
          <ExplainHeader>
            <TitleBox>
              <Essential>[필수]</Essential>
              <EssentialTitle>개인정보보호정책</EssentialTitle>
            </TitleBox>
            <CheckContainer>
              <CheckText>약관동의</CheckText>
              <Checkbox />
            </CheckContainer>
          </ExplainHeader>
          <ExplainText>
            [개인정보 수집·이용 동의서]
            <br />
            <br />
            주식회사 멋쟁이사자처럼은 「정보통신망 이용촉진 및 정보보호에 관한
            법률」 및 「개인정보보호법」 등 관련 법령상의 개인정보보호 규정을
            준수하여 「멋쟁이사자처럼 대학 11기」 참가자의 개인정보 및 권익을
            보호하고, 개인정보와 관련한 참가자의 고충을 원활하게 처리할 수
            있도록 다음과 같은 개인정보 처리방침을 두고 있습니다.
            <br />
            <br />
            가. 개인 정보의 수집· 이용에 관한 사항
            <br />
            ▣ 개인 정보의 수집· 이용 목적
            <br />
            개인 정보는 1차적으로 본 프로그램 참가신청, 참가신청에 따른
            본인확인, 개인식별, 프로그램 진행, 프로그램 관련 안내/고지사항 등의
            전달, 문의사항 또는 불만사항 등의 확인 및 처리, 분쟁 조정을 위한
            기록 보존 등을 위해 사용됩니다. 이후 멋쟁이사자처럼의 프로그램 및
            브랜드 홍보를 위한 마케팅에 활용될 수 있습니다.
            <br />
            지원 프로세스 관리를 위한 개인정보 열람을 위해, 본 동아리 지원 의사
            확인, 지원관리에 따른 본인 식별·인증, 지원자 자격 유지·관리,
            고충처리(CS) 목적으로 개인정보를 처리합니다.
            <br />
            민원사무 처리를 위해 민원인의 신원 확인, 민원사항 확인, 처리결과
            통보 목적으로 개인정보를 처리합니다.
            <br />
            서비스 제공을 위해 서비스 제공, 콘텐츠 제공, 맞춤서비스 제공,
            본인인증을 목적으로 개인정보를 처리합니다.
            <br />
            ▣ 수집하는 개인 정보의 항목
            <br />
            성명, 연락처, 이메일 등 신청 및 프로그램 운영 중 취득한 정보
            <br />
            ▣ 개인 정보의 보유· 이용기간
            <br />
            개인 정보는 원칙적으로 개인 정보의 수집 및 이용목적이 달성되면 지체
            없이 파기합니다. 단, 본 사업 종료 후 참여 인정 문서 발급을 위한
            최소한의 자료(성명, 학번, 학과, 연락처, 이메일)는 사업종료 이후
            5년간 보존됩니다.
            <br />
            ▣ 동의를 거부할 권리 및 동의를 거부할 경우의 불이익
            <br />
            위 개인 정보의 수집· 이용에 거부할 권리가 있음을 알려드립니다. 단,
            수집항목은 사업 진행을 위한 최소한의 필수 정보로서 개인 정보 수집·
            이용에 동의하지 않으실 경우 프로그램 참가 및 제반 활동이
            불가능합니다.
            <br />
            <br />
            나. 개인 정보 제3자 제공에 관한 사항
            <br />
            ▣ 제공받는 자
            <br />
            주식회사 멋쟁이사자처럼
            <br />
            ▣ 제공받는 자의 목적
            <br />
            ‘멋쟁이사자처럼 대학 11기 모집’ 진행 및 운영, 참가자 관리
            <br />
            ▣ 제공하는 개인 정보 항목
            <br />
            성명, 연락처, 이메일 등 신청 및 프로그램 운영 중 취득한 정보
            <br />
            ▣ 동의를 거부할 권리 및 동의를 거부할 경우의 불이익
            <br />위 제3자에 대한 개인 정보의 제공에 관한 동의를 거부할 수
            있으나 본 프로그램 참가를 위해 필수적이므로 위 사항에 동의하셔야만
            참가 및 활동이 가능합니다.
          </ExplainText>
        </SignUpExplain>
        <BigButton buttonName={"완료하기"} />
      </Container>
    </SignUpPage>
  );
};

const SignUpPage = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding-top: 21.3%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10%;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.mainTitle};
  padding: 5%;
`;

const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SignUpExplain = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.15vh;
  align-items: center;
`;

const ExplainHeader = styled.div`
  display: flex;
  width: 58vw;
  min-width: 100px;
  justify-content: space-between;
  align-items: center;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Essential = styled.p`
  ${({ theme }) => theme.fonts.subTitle};
  color: ${({ theme }) => theme.colors.green};
  margin: 0 5px;
`;

const EssentialTitle = styled.p`
  ${({ theme }) => theme.fonts.subTitle};
`;

const CheckContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckText = styled.p`
  ${({ theme }) => theme.fonts.subTitle};
  margin: 0 5px;
`;

const ExplainText = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  width: 58vw;
  height: 342px;
  overflow-y: scroll;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 1.08vw;
  padding: 1.5625vw;
  margin: 1.2037vh;
  line-height: 22px;
`;

export default SignUp;
