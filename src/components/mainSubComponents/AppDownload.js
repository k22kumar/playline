import styled from "styled-components";
import playStore from "../../assets/icons/google-play@2x.png";
import appleStore from "../../assets/icons/ios-app@2x.png";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
`;

const AppDownload = () => {
  return (
    <StyledDiv>
      <h3>Download the app</h3>
      <div>
        <button>
          <img src={appleStore} alt="Click to download from Apple Store" />
        </button>
        <button>
          <img src={playStore} alt="Click to download from Apple Store" />
        </button>
      </div>
    </StyledDiv>
  );
};

export default AppDownload;
