import styled from "styled-components";
import styled, { css } from "styled-components";
import logo from "../assets/logo/logo@1x.png";
import wrapper from "./styles/wrapper";

const StyledHR = styled.hr`
  ${({ weight })} => {
      
  }
`;

const StyledLine = () => {
  return (
    <StyledHR>
      <img src={logo} alt="PlayLine Sports Lotto Logo" />
    </StyledHR>
  );
};

export default StyledLine;