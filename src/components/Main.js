import styled from "styled-components";
import wrapper from "./styles/wrapper";
import Progress from './mainSubComponents/Progress';
import MainTitles from "./mainSubComponents/MainTitles";
import PlayerInfo from "./mainSubComponents/PlayerInfo";
import UserAction from "./mainSubComponents/UserAction";
import AppDownload from "./mainSubComponents/AppDownload";
import StyledLine from "./mainSubComponents/StyledLine";

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
        <StyledLine weight={'thick'}/>
        <PlayerInfo/>
        <UserAction/>
        <StyledLine weight={'thin'}/>
        <AppDownload/>
    </StyledMain>
  );
};

export default Main;
