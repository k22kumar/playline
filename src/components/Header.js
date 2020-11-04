import styled from "styled-components";
import logo from "../assets/logo/logo@1x.png";
import wrapper from "./styles/wrapper";
import { devices } from "./styles/devices";

const StyledHeader = styled.header`
  ${wrapper}
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 90px;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 142px;
  }

  @media ${devices.mobileL} {
    margin-top: 20px;
    & div {
      width: 205px;
      height: 120px;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="PlayLine Sports Lotto Logo" />
      </div>
    </StyledHeader>
  );
};

export default Header;
