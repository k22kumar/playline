import styled, { css } from "styled-components";

const thick = `
  width: 205px;
  border: 0;
  margin:0;
  height: 1px;
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
  margin: 0 auto;
`;

const StyledLine = ({ weight }) => {
  return (
    <StyledHR weight={weight}/>
  );
};

export default StyledLine;