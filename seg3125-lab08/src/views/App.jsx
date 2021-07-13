import '../css/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';
import Register from './Register';
import { experts } from '../data/people';
import {courts, courses} from "../data/offerings";
import Courts from './Courts';

function App() {

  return (      
    <Router>
      <div className="App">
        <div className="container-fluid">
          <NavBar/>
        </div>
        <div className="content">
          <Switch>
            
          </Switch>
        </div>
        <div>
          <Register propExperts = {experts} propCourts = {courts} propCourses={courses}/> 
          <Courts propCourts = {courts}/>
        </div>
        <Footer/>
      </div>
    </Router>
  );
  
}

export default App;
