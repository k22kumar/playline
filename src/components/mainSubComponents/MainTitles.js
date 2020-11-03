import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
    & h1 {
        color: #464646;
        text-transform: uppercase;
    }
    & h2 {
        text-transform: uppercase;
        color: #737373;
    }
    & p {
        color: #686868;
    }
    & hr {
        width: 70%
    }
`;

const MainTitle = () => {
  return (
    <StyledDiv>
      <h1>Your PlayLine is Set!</h1>
      <h2>Come back @ 7:30pm to track it live!</h2>
      <p>
        Pro Tip: You can manage your PlayLine's until they go live in the
        Upcoming area
      </p>
      <hr/>
    </StyledDiv>
  );
};

export default MainTitle;
