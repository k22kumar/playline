import styled from "styled-components";
import wrapper from './styles/wrapper';

const StyledFooter = styled.footer`
  ${wrapper}
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 80px;
  
  & p, a {
    font-size: 1.4rem;
    color: #a1a1a1;
    text-transform: uppercase;
    margin: 0 3px;
    }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://www.playline.com/about/">About</a>
      <p> | </p>
      <a href="https://www.playline.com/how-it-works/">PLB Bonus</a>
      <p> | </p>
      <a href="https://www.playline.com/contact-us/">Contact</a>
      <p> | </p>
      <a href="https://www.playline.com/security/">Security</a>
      <p> | </p>
      <a href="https://www.playline.com/responsible-play/">Responsible Play</a>
      <p> | </p>
      <a href="https://www.playline.com/privacy-policy-2/">Privacy</a>
      <p> | </p>
      <a href="https://www.playline.com/terms-of-use/">Terms</a>
    </StyledFooter>
  );
};

export default Footer;
