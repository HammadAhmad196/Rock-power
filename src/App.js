import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/images/favicon.png";
import "./assets/css/animate.css";
import "./assets/css/tiny-slider.css";
import "./assets/fonts/lineicons/font-css/LineIcons.css";
import "./assets/css/tailwindcss.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Home from './pages/home/Home';
import Services from './components/services/Services';
import Plan from './components/plan/Plan';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/home"} exact component={Home} />
        <Route path={"/register"} exact component={Register} />
        <Route path={"/login"} exact component={Login} />
        <Route path={"/about"} exact component={About} />
        <Route path={"/services"} exact component={Services} />
        <Route path={"/pricing"} exact component={Plan} />
        <Route path={"/contact"} exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
