import React, { useEffect } from "react";
import Navigation from "./components/navigation";
import Foooter from "./components/footer";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import About from "./pages/about";
import EntirePost from "./components/common/entire-post";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter,
} from "react-router-dom";

// scroll to top on page change
function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);
// scroll to top on page change

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/articles/:slug" component={EntirePost} />
            <Route path="/" component={Home} />
            <Route component={() => 404} />
          </Switch>
          <Foooter />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
