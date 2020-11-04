import { Fragment } from 'react';
import Normalize from "./globalStyles/normalize";
import GlobalStyles from "./globalStyles/globalStyles";
import Header from './components/Header.js';
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <Fragment>
      <Normalize />
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
