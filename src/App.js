
import './App.css';
import Header from './components/Header.js'
import Home from './components/Home.js'
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
        <header><Link to="/"><Header /></Link></header>
      </div>

  

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Site" component={Site} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/Process" component={Process} />
        <Route path="/SiteHeader" component={SiteHeader} />
      </Switch>

    </Router>
  );
}

export default App;
