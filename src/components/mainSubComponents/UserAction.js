import styled from "styled-components";
import notify from "../../assets/icons/notify-me@2x.png";
import deposit from "../../assets/icons/money-bag@2x.png";
import { devices } from "../styles/devices";

const StyledDiv = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;

  & button,
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & button {
    border-radius: 40px;
    padding: 8px 12px;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);

    div {
      justify-content: center;
      width: 20px;
      height: 20px;
      margin-right: 15px;
    }

    @media ${devices.tablets} {
      
    }
  }
`;

const UserAction = () => {
  return (
    <StyledDiv>
      <button aria-label={"Click to recieve notificatoins"}>
        <div>
          <img src={notify} alt="bell icon" />
        </div>
        <h3> Notify Me </h3>
      </button>
      <button aria-label={"Click to make a deposit"}>
        <div>
          <img src={deposit} alt="bag of cash icon" />
        </div>
        <h3> Deposit </h3>
      </button>
    </StyledDiv>
  );
};

export default UserAction;