
import { BrowserRouter as Router, Route } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

import Navbar from "./components/navbar";
import Home from "./components/home";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
import Terms from "./components/misc/terms";
import Privacy from "./components/misc/privacy";
import Refund from "./components/misc/refund";

import { ScrollContext } from "./components/context";
import { useRef } from "react";

function App() {
  smoothscroll.polyfill();
  const homeRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();
  const contactFormRef = useRef();
  const pricingRef = useRef();
  return (
    <div className="App">
      <Router>
        <ScrollContext.Provider value={{homeRef,workRef,contactRef,contactFormRef,pricingRef}}>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/refund" component={Refund} />
          <Footer/>
        </ScrollContext.Provider>
      </Router>
    </div>
  );
}

export default App;
