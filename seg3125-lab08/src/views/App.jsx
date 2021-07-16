import '../css/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';
import Register from './Register';
import { experts } from '../data/people';
import {courts, courses} from "../data/offerings";
import Courts from './Courts';
import { useState } from 'react';
import { user_testimonials } from "../data/people";
import { langauge_data } from '../data/language';

function App() {

  const[lang, setLang] = useState("english");

  const languageChange = (e)=>{    
    setLang(e.target.value);
  }
  
  return (      
    <Router>
      <div className="App">
        {/* <div className="container-fluid">
        </div> */}
        <div className="content">
          <NavBar othrTxt = {langauge_data} propLangChange = {languageChange} propLang = {lang}/>
          <Switch>
          <Route  exact path="/">
              <Home othrTxt={langauge_data} propTesti = {user_testimonials} propLang ={lang}/>
          </Route>
          <Route  path="/courts">
            <Courts othrTxt = {langauge_data} propCourts = {courts} propLang ={lang}/>
          </Route>
          <Route path="/register">
            <Register othrTxt={langauge_data} propExperts = {experts} propCourts = {courts} propCourses={courses} propLang ={lang}/> 
          </Route>

          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
  
}

export default App;
