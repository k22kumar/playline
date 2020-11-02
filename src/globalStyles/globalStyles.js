import { createGlobalStyle } from "styled-components";
import MorganPosterAvecFont from '../fonts/morganposteravec_bold-webfont.woff';
import SFProDisplayLight from '../fonts/70c38766a71f8f7f0a477605da15fcd3.woff';

const GlobalStyles = createGlobalStyle`
html {
   font-size: 62.5%; 
}

body {
   background-color: #012146;
}

@font-face {
    font-family: 'SFProDisplay';
    src: url(${SFProDisplayLight}) format('wotf');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'morganposteravecbold';
    src: url(${MorganPosterAvecFont}) format('woff');
    font-weight: normal;
    font-style: normal;
}


h1, h2 {
   font-family: morganposteravecbold;
}

p {
   font-family: SFProDisplay;
}
`;

export default GlobalStyles;
