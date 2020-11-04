import styled from "styled-components";

const StyledLI = styled.li`
  width: 56px;
  position: relative;

  & .imgContainer {
    margin: 0 auto;
    width: 66px;
    height: 66px;
    background-color: #f0f0f0;
    border: 3px solid #ffffff;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -33px;
    /* reverses the zindex so that the players will overlap to their right */
    z-index: ${({ index }) => index * (-1) + 7};
  }

  & .pts,
  .lastName {
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  & .pts {
    margin-top: 5px;
  }

  & .lastName {
    margin: 8px 0;
    margin-top: 74px;
  }

  & .pointsContainer,
  .pointsContainer p {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #e4e4e4;
  }

  & .pointsContainer {
    margin: 0 auto;
    width: 35px;
    height: 35px;
    background-color: #f0f0f0;
    p {
      text-align: center;
      width: 30px;
      height: 30px;
      font-size: 1.6rem;
      font-family: morganposteravecbold;
      background-color: #ffffff;
      color: #4a4a4a;
    }
  }
`;

const PlayerSingle = ( { index, last_name, points, headshot} ) => {
    return (
      <StyledLI index={index}>
        <div className={"imgContainer"}>
          <img src={headshot} alt={`Headshot of ${last_name}`}/>
        </div>
        <p className={"lastName"}>{last_name}</p>
        <div className={"pointsContainer"}>
          <p>{points}</p>
        </div>
        <p className={"pts"}>pts</p>
      </StyledLI>
    );
}

export default PlayerSingle;