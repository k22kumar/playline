import styled, { css } from "styled-components";
import Progress from './mainSubComponents/Progress';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #f8f8f8;
`;

const Main = () => {
  return (
    <StyledMain>
        <Progress/>
    </StyledMain>
  );
};

export default Main;
