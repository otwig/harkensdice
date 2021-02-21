import logo from './images/harkensdice.png';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Site from './components/Site.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/"><Header /></Link>
        <div className="buttonBox">
          <button> <Link to="https://www.etsy.com/shop/harkensdice">Shop</Link> </button>
          <button><a href="/components/Site">Site</a></button>
          <button><a href="https://www.instagram.com/harkensdice/">Instagram</a></button>
          <button><a href="https://ko-fi.com/harkensdice">Ko-Fi</a></button>

        </div>
        <Footer />

        <Switch>
          <Route absolute path="/"><App/></Route>
          <Route path="/components/Site"><Site /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
