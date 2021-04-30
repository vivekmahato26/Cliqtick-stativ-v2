import { BrowserRouter as Router, Route } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Terms from "./components/misc/terms";
import Privacy from "./components/misc/privacy";
import Refund from "./components/misc/refund";
import Management from "./components/smm";
import Advertising from "./components/sma";
import Seo from "./components/seo";

import { ScrollContext } from "./components/context";
import { useRef } from "react";
import Work from "./components/works";

function App() {
  smoothscroll.polyfill();
  const homeRef = useRef();
  const workRef = useRef();
  const contactFormRef = useRef();
  const pricingRef = useRef();
  const smmPricingRef = useRef();
  return (
    <div className="App">
      <Router>
        <ScrollContext.Provider value={{homeRef,workRef,contactFormRef,pricingRef,smmPricingRef}}>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/social-media-management" component={Management}/>
          <Route path="/advertising" component={Advertising}/>
          <Route path="/seo" component={Seo}/>
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/refund" component={Refund} />
          <Route path="/our-work" component={Work} />
          <Footer/>
        </ScrollContext.Provider>
      </Router>
    </div>
  );
}

export default App;
