import styled from "styled-components";
import StyledLine from './StyledLine';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
    & h1 {
        font-size: 3rem;
        color: #464646;
        text-transform: uppercase;
    }
    & h2 {
        font-size: 1.73rem;
        text-transform: uppercase;
        color: #737373;
        margin-bottom: 10px;
    }
    & p {
      margin-top: 10px;
        color: #686868;
    }
`;

const MainTitle = () => {
  return (
    <StyledDiv>
      <h1>Your PlayLine is Set!</h1>
      <h2>Come back @ 7:30pm to track it live!</h2>
        <StyledLine weight={'thick'}/>
      <p>
        Pro Tip: You can manage your PlayLine's until they go live in the
        Upcoming area
      </p>
    </StyledDiv>
  );
};

export default MainTitle;
