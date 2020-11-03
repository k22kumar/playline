import styled from "styled-components";
import notify from "../../assets/icons/notify-me@2x.png";
import deposit from "../../assets/icons/money-bag@2x.png";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    display: flex;
    justify-content: center;
    align-items: center
  }
`;

const UserAction = () => {
  return (
    <StyledDiv>
      <button>
        <div>
          <img src={notify} alt="Click to get a notification" />
        </div>
        <h3> Notify Me </h3>
      </button>
      <button>
        <div>
          <img src={deposit} alt="Click to get a notification" />
        </div>
        <h3> Notify Me </h3>
      </button>
      
    </StyledDiv>
  );
};

export default UserAction;