import { createGlobalStyle } from "styled-components";
import MorganPosterAvecFont from '../fonts/morganposteravec_bold-webfont.woff';
import SFProDisplayLight from '../fonts/SFProDisplayLight.woff';
import SFProDisplayBold from "../fonts/SF Pro Display Bold.woff";


const GlobalStyles = createGlobalStyle`
html {
   font-size: 62.5%; 
}

body {
   background-color: #012146;
}

@font-face {
    font-family: 'SFProDisplay';
    src: url(${SFProDisplayLight}) format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'morganposteravecbold';
    src: url(${MorganPosterAvecFont}) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'SFProDisplayBold';
    src: url(${SFProDisplayBold}) format('woff');
}


h1, h2 {
   font-family: morganposteravecbold;
}

h3 {
   font-family: "SFProDisplayBold", Helvetica, Arial, sans-serif;
}

p, a {
   font-family: SFProDisplay;
}

ul {
   list-style: none;
}

button {
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

`;

export default GlobalStyles;
