import styled from "styled-components";
import playStore from "../../assets/icons/google-play@2x.png";
import appleStore from "../../assets/icons/ios-app@2x.png";

const StyledDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  & h3 {
    margin: 20px;
  }

  & div {
    margin-bottom: 30px;
  }

  & div,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & button {
    width: 100px;
    height: 40px;
  }

  & .appleStore {
    margin-right: 12px;
  }

  & .playStore {
    margin-left: 12px;
  }
`;

const AppDownload = () => {
  return (
    <StyledDiv>
      <h3>Download the app</h3>
      <div>
        <button
          className={"appleStore"}
          aria-label={"Click to download from the Apple Store"}
        >
          <img src={appleStore} alt="Available on the Apple Store" />
        </button>
        <button
          className={"playStore"}
          aria-label={"Click to download from the Google Play Store"}
        >
          <img src={playStore} alt="Get it on Google Play" />
        </button>
      </div>
    </StyledDiv>
  );
};

export default AppDownload;
