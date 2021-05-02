import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Blog from "./components/Blog/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Home/Footer/Footer";
import TopNav from "./components/Home/Header/TopNav/TopNav";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Projects from "./components/Projects/Projects/Projects";
import Resume from "./components/Resume/Resume";

function App() {
  document.body.style.backgroundColor = 'rgb(0, 31, 0)';
  return (
    <Router>
      <TopNav></TopNav>
        <Switch>
          <Route path="/about">
            <Home></Home>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
  );
}

export default App;
