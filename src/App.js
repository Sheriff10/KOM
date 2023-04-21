import logo from "./logo.svg";
import "./App.css";
import "./css/styling.css";
import { Header } from "./components/header";
import { Intro } from "./components/intro";
import { About } from "./components/about";
import { Tokenomics } from "./components/tokenomics";
import { Roadmap } from "./components/roadmap";
import { Footer } from "./components/footer";
import { Services } from "./components/services";

function App() {
   return (
      <div className="App">
         <div className="wrapper1">
            <div className="overlay">
               <Header />
               <Intro />
            </div>
         </div>
         <About />
         <Services />
         <Tokenomics />
         <Roadmap />
         <Footer />
      </div>
   );
}

export default App;
