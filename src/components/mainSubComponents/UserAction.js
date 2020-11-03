import styled from "styled-components";
import notify from "../../assets/icons/notify-me@2x.png";
import deposit from "../../assets/icons/money-bag@2x.png";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & button,
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & button {
    border-radius: 40px;
    padding: 10px 20px;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
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