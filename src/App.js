import { Fragment } from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <Fragment className="App">
      <Header/>
      <Main/>
      <Footer/>
    </Fragment>
  );
}

export default App;
