import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
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
  flex-wrap: wrap;

  & li {
    width: 56px;
    position: relative;
  }

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
      img{
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -50%;
      }
  }

  
  & .pts, .lastName {
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
    }
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

  const htmlToAdd = players.map((player, key) => {
    console.log(key);
    const { last_name, points } = player;
    const headshot = mapLastNameToHeadShot(last_name);
    return (
      <li key={key}>
        <div className={"imgContainer"}>
          <img src={headshot} />
        </div>
        <p className={"lastName"}>{last_name}</p>
        <div className={"pointsContainer"}>
          <p>{points}</p>
        </div>
        <p className={"pts"}>pts</p>
      </li>
    );
  });

  return <StyledUL>{htmlToAdd}</StyledUL>;
};

export default PlayerInfo;
