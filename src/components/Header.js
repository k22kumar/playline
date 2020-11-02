import styled, { css } from "styled-components";
import logo from '../assets/logo/logo@1x.png';

const StyledHeader = styled.header`
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