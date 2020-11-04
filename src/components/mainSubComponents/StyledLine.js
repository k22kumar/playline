import styled, { css } from "styled-components";

const thick = `
  width: 205px;
  height: 1px;
  background-color: #DDDDDD;
`;

const thin = `
  width: 44%;
  height: 2px;
  background-color: #F0F0F0;
`;

const StyledHR = styled.hr`
  margin: 0 auto;
  border: 0;
  ${({ weight }) =>
    weight === "thick" &&
    css`
      ${thick}
    `}
  ${({ weight }) =>
    weight === "thin" &&
    css`
      ${thin}
    `}
`;

const StyledLine = ({ weight }) => {
  return <StyledHR weight={weight} />;
};

export default StyledLine;
