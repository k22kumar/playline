import styled from "styled-components";
import logo from '../assets/logo/logo@1x.png';
import wrapper from "./styles/wrapper";

const StyledHeader = styled.header`
    ${wrapper}
    display: flex;
    justify-content: center;
    align-items: center;

        & div{
    height: 142px;

        }
`;

const Header = () => {
    return (
        <StyledHeader>
            <div>
                <img src= {logo} alt='PlayLine Sports Lotto Logo'/>
            </div>
        </StyledHeader>
    )
}

export default Header;