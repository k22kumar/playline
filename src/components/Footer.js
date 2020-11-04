import styled from "styled-components";
import wrapper from "./styles/wrapper";
import { devices } from "./styles/devices";

const StyledFooter = styled.footer`
  ${wrapper}
  width: 90%;
  margin-top: 60px;
  margin-bottom: 80px;

  & div {
    display: flex;
    justify-content: center;
  }

  & p,
  a {
    font-size: 1.4rem;
    color: #a1a1a1;
    text-transform: uppercase;
    margin: 5px 3px;
  }

  @media ${devices.tablet} {
      min-width: 270px;
    & div {
      margin-top: 30px;
      margin-bottom: 40px;
      flex-wrap: wrap;
    }
    & p,
    a {
      font-size: 1.1rem;
    }
  }

  @media ${devices.mobileL} {
    margin: 0 auto;
    margin-top: 20px & div {
      margin: 0 auto;
      width: 80%;
      flex-direction: column;
    }
    & p {
      display: none;
    }

    & a {
      text-align: left;
      width: 100%;
      padding: 3px 0;
      border-bottom: 1px solid #a1a1a1;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <a href="https://www.playline.com/about/">About</a>
        <p> | </p>
        <a href="https://www.playline.com/how-it-works/">PLB Bonus</a>
        <p> | </p>
        <a href="https://www.playline.com/contact-us/">Contact</a>
        <p> | </p>
        <a href="https://www.playline.com/security/">Security</a>
        <p> | </p>
        <a href="https://www.playline.com/responsible-play/">
          Responsible Play
        </a>
        <p> | </p>
        <a href="https://www.playline.com/privacy-policy-2/">Privacy</a>
        <p> | </p>
        <a href="https://www.playline.com/terms-of-use/">Terms</a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
