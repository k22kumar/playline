import styled from "styled-components";
import progress from "../../assets/icons/progress@2x.png";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin: 20px;
  margin-left: 30px;
`;

const Progress = () => {
  return (
    <StyledDiv>
      <img src={progress} alt="PlayLine Sports Lotto Logo" />
    </StyledDiv>
  );
};

export default Progress;
