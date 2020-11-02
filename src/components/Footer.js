import styled, { css } from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a href="">About</a>
      <p> | </p>
      <a href="">PLB Bonus</a>
      <p> | </p>
      <a href="">Contact</a>
      <p> | </p>
      <a href="">Security</a>
      <p> | </p>
      <a href="">Responsible Play</a>
      <p> | </p>
      <a href="">Privacy</a>
      <p> | </p>
      <a href="">Terms</a>
    </StyledFooter>
  );
};

export default Footer;
