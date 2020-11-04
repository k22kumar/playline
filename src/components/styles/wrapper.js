import { devices } from "./devices";

const wrapper = `
  width: 35%;
  min-width: 480px;
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;

  @media ${devices.tablet} {
    min-width: 400px;
  }
  @media ${devices.mobileL} {
    min-width: 325px;
  }
  @media ${devices.mobileS} {
    min-width: 300px;
  }
`;

export default wrapper;