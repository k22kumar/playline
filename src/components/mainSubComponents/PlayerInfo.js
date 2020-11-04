import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import PlayerSingle from "./PlayerSingle";
import { devices } from "../styles/devices";

import gordon from "../../assets/headshots/Aaron Gordon -PLP59D7092156491v2.png";
import davis from "../../assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png";
import russell from "../../assets/headshots/Dangelo Russell PLP59D709255D994v4.png";
import leonard from "../../assets/headshots/Kawhi-Leonard-PLP59D7093A107E7v2.png";
import lowry from "../../assets/headshots/Kyle-Lowry-PLP59D70927DF104.png";
import james from "../../assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png";
import siakam from "../../assets/headshots/Pascal-Siakam-PLP59D70927CC6DD.png";

const StyledUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${devices.tablets} {
    width: 370px;
  }
`;

const PlayerInfo = () => {
  const [players, setPlayers] = useState([]);
  // api call for player data
  useEffect(() => {
    // make an axios call to get the data
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    axios
      .get(
        `${proxyUrl}https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json`
      )
      .then((response) => {
        setPlayers(response.data.players);
      });
  }, []);

  const mapLastNameToHeadShot = (lastName) => {
    let headshot = "";
    switch (lastName.toLowerCase()) {
      case "gordon":
        headshot = gordon;
        break;
      case "davis":
        headshot = davis;
        break;
      case "russell":
        headshot = russell;
        break;
      case "leonard":
        headshot = leonard;
        break;
      case "lowry":
        headshot = lowry;
        break;
      case "james":
        headshot = james;
        break;
      case "siakam":
        headshot = siakam;
        break;
      default:
        headshot = leonard;
    }
    return headshot;
  };

  const htmlToAdd = players.map((player, index) => {
    const { last_name, points } = player;
    const headshot = mapLastNameToHeadShot(last_name);
    return (
      <PlayerSingle
        key={index}
        index={index}
        last_name={last_name}
        points={points}
        headshot={headshot}
      />
    );
  });

  return <StyledUL>{htmlToAdd}</StyledUL>;
};

export default PlayerInfo;
