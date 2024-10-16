import "./App.css";
import About from "./sections/About";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import SuperApp from "./sections/SuperApp";
import Contact from "./sections/Contact";

const App: React.FC = (): JSX.Element => {
 
  return <SuperApp>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
  </SuperApp>
    
};

export default App;
