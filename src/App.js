import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import ExemploQuery from './components/ExemploQuery';
import NotFoundRoute from './components/NotFoundRoute';
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/"
            component={Home} />
          <Route path="/about"
            component={About} />
          <Route path="/courses"
            component={Courses} />
          <Route path="/query"
            component={ExemploQuery} />
          <Route path="*"
            component={NotFoundRoute} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
