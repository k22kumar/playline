import styled, { css } from "styled-components";

const thick = `
  width: 70%;
  border: 0;
  margin:0;
  height: 4px;
  background-color: #DDDDDD;
`;

const thin = `
  width: 60%;
  border: 0;
  margin:0;
  height: 4px;
  background-color: #F0F0F0;
`;

const StyledHR = styled.hr`
  ${({ weight }) => weight === 'thick' && css`${thick}`}
  ${({ weight }) => weight === 'thin' && css`${thin}`}
`;

const StyledLine = ({ weight }) => {
  return (
    <StyledHR weight={weight}/>
  );
};

export default StyledLine;