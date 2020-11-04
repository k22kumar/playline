// modified from https://jsramblings.com/how-to-use-media-queries-with-styled-components/

const size = {
  mobileS: "320px",
  mobileL: "480px",
  tablet: "780px",
};

export const devices = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
};
