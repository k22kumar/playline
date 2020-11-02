import styled, { css } from "styled-components";
import logo from '../assets/logo/logo@1x.png';
import wrapper from "./styles/wrapper";

const StyledHeader = styled.header`
    ${wrapper}
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = () => {
    return (
        <StyledHeader>
            <img src= {logo} alt='PlayLine Sports Lotto Logo'/>
        </StyledHeader>
    )
}

export default Header;