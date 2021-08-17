import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/works";
import {Footer} from "./footer/Footer";

function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
