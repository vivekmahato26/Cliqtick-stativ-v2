
import { BrowserRouter as Router, Route } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

import Navbar from "./components/navbar";
import Home from "./components/home";
import Pricing from "./components/pricing";

import { ScrollContext } from "./components/context";
import { useRef } from "react";

function App() {
  smoothscroll.polyfill();
  const homeRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();
  const contactFormRef = useRef();
  return (
    <div className="App">
      <Router>
        <ScrollContext.Provider value={{homeRef,workRef,contactRef,contactFormRef}}>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/pricing" component={Pricing} />
        </ScrollContext.Provider>
      </Router>
    </div>
  );
}

export default App;
