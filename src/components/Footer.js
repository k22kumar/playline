import styled from "styled-components";
import wrapper from './styles/wrapper';
import { devices } from './styles/devices';

const StyledFooter = styled.footer`
  ${wrapper}
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 80px;

  & p,
  a {
    font-size: 1.4rem;
    color: #a1a1a1;
    text-transform: uppercase;
    margin: 5px 3px;
  }

  @media ${devices.tablet} {
    min-width: 470px;
    margin-top: 30px;
    margin-bottom: 40px;
    flex-wrap: wrap;
    & p,
    a {
      font-size: 1.2rem;
    }
  }

  @media ${devices.mobileL} {
    min-width: 300px;
  }
`;

const Footer = () => {
  console.log(devices);
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
