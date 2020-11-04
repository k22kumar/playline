import { createGlobalStyle } from "styled-components";
import MorganPosterAvecFont from "../fonts/morganposteravec_bold-webfont.woff";
import SFProDisplayLight from "../fonts/SFProDisplayLight.woff";
import SFProDisplayBold from "../fonts/SF Pro Display Bold.woff";
import { devices } from "../components/styles/devices";

const GlobalStyles = createGlobalStyle`
html {
   font-size: 62.5%; 
   overflow-x: hidden;
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

h1, h2, h3 {
   text-transform: uppercase;
}

h1, h2 {
   font-family: morganposteravecbold;
}

h3 {
   font-size: 1.4rem;
   font-family: "SFProDisplayBold", Helvetica, Arial, sans-serif;
   color: #686868;
}

p, a {
   font-family: SFProDisplay;
}

a {
   text-decoration: none;
}

h1, h2, h3, p {
   margin: 0;
}

ul {
   list-style: none;
   padding: 0;
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

img {
   display: block;
   max-width: 100%;
}

@media ${devices.tablets} {
      h3 {
         font-size: 1.2rem;
      }
    }

`;

export default GlobalStyles;
