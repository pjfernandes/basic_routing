import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route exact path="/"
            element={<Home/>} />
          <Route path="/about"
            element={<About/>} />
          <Route path="/courses"
            element={<Courses/>} />
          <Route path="/query"
            element={<ExemploQuery/>} />
          <Route path="*"
            element={<NotFoundRoute/>} />
        </Routes>
      </div>

    </Router>
  );
}


export default App;
