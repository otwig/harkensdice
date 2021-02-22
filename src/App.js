import logo from './images/harkensdice.png';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Site from './components/Site.js'
import Contact from './components/Contact.js'
import About from './components/siteComps/About.js'
import Gallery from './components/siteComps/Gallery.js'
import Process from './components/siteComps/Process.js'
import SiteHeader from './components/siteComps/SiteHeader.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/"><Header /></Link>
        <div className="buttonBox">
          <button> <a href="https://www.etsy.com/shop/harkensdice">Shop</a> </button>
          <button><Link to="/Site">Site</Link></button>
          <button><a href="https://www.instagram.com/harkensdice/">Instagram</a></button>
          <button><a href="https://ko-fi.com/harkensdice">Ko-Fi</a></button>
        </div>
        
        <Switch>
          <Route path="/Site" component={Site}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/About" component={About}/>
          <Route path="/Gallery" component={Gallery}/>
          <Route path="/Process" component={Process}/>
          <Route path="/SiteHeader" component={SiteHeader}/>
        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
