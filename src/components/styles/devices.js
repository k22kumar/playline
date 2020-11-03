// modified from https://jsramblings.com/how-to-use-media-queries-with-styled-components/

const size = {
    mobileS: '320px',
    mobileL: '425px',
    tablet: '868px',
    laptop: '1440px',
    desktop: '2560px'
}

const devices = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default devices;