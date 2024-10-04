import styled from "styled-components";
import { ReactComponent as Logo } from "../images/airplaneLogo.svg";
import { ReactComponent as Logout } from "../images/logoutButton.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContent>
      <WholeContainer>
        <Link to="/">
          <LogoComponent>
            <LogoText>비행기레터</LogoText>
            <Logo />
          </LogoComponent>
        </Link>
        <Logout />
      </WholeContainer>
    </HeaderContent>
  );
};

const HeaderContent = styled.div`
  display: flex;
  position: fixed;
  z-index: 1100;
  width: 100vw;
  height: 10.185vh;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #a9a9a9;
`;

const WholeContainer = styled.div`
  display: flex;
  padding: 0 18.75vw;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const LogoComponent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 170px;
`;

const LogoText = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.fonts.heading};
`;

export default Header;
