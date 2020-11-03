import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import photo from '../../assets/headshots/Aaron Gordon -PLP59D7092156491v2.png';

const StyledUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

    & .imgContainer {
        margin: 0 auto;
        width: 50%;
    }
`;

// playercards and pts ring bgc=#F0F0F0

// map over the p
const PlayerInfo = () => {



  const [players, setPlayers] = useState([]);
  // api call for player data
  useEffect(() => {
    // make an axios call to get the data
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    axios.get(
        `${proxyUrl}https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json`
      ).then((response) => {
        console.log('plaersresposnese',response.data);
        // const newData = [...response.data];
        setPlayers(response.data.players);
        console.log('players',players);
      });

  }, []);

  const htmlToAdd = players.map((player, index) => {
    const { last_name, points } = player;
    const player1 = require("../../assets/headshots/Aaron Gordon -PLP59D7092156491v2.png");
    return (
      <li>
        <div className={"imgContainer"}>
          <img
            src={photo}
          />
        </div>
        <p>{last_name}</p>
        <div className={"pointsContainer"}>
          <p>{points}</p>
        </div>
        <p>pts</p>
      </li>
    );
  });

  return (
    <StyledUL>
        {htmlToAdd}
    </StyledUL>
  );
};

export default PlayerInfo;
