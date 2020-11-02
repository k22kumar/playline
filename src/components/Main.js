import styled from "styled-components";
import Progress from './mainSubComponents/Progress';
import MainTitles from "./mainSubComponents/MainTitles";
import wrapper from "./styles/wrapper";

const StyledMain = styled.main`
  ${wrapper}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #f8f8f8;
`;

const Main = () => {
  return (
    <StyledMain>
        <Progress/>
        <MainTitles/>
    </StyledMain>
  );
};

export default Main;
