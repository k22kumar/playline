
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";


const StyledUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// api call for player data
useEffect(() => {

}, []);



// playercards and pts ring bgc=#F0F0F0
const PlayerInfo = () => {
    return(
        <StyledUL>
            <li>
                <div className={'imgContainer'}>
                    <img src="../../assets/headshots/Aaron Gordon -PLP59D7092156491v2.png" alt="headshot photo of basketball player AaronGordon"/>
                </div>
                <p>
                    Name
                </p>
                <div className={'pointsContainer'}>
                    <p>
                        28
                    </p>
                </div>
                <p>pts</p>
            </li>
        </StyledUL>
    )
}

export default PlayerInfo;