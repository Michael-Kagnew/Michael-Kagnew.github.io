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
import Course from './Course';
import About from './About';
import Experts from './Experts';

function App() {

  const[lang, setLang] = useState("english");

  const languageChange = (e)=>{    
    setLang(e.target.value);
  }
  
  return (      
    <div>
      <Router>
      <div className="App">
      <NavBar othrTxt = {langauge_data} propLangChange = {languageChange} propLang = {lang}/>

        <div className="content">
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
          <Route path="/courses">
            <Course   othrTxt={langauge_data} propCourses = {courses} propLang = {lang}/>
          </Route>
          <Route path="/experts">
            <Experts propExperts = {experts} othrTxt={langauge_data}  propLang = {lang}></Experts>
          </Route>
          </Switch>
          <Route path="/about">
            <About othrTxt={langauge_data}  propLang = {lang}></About>
          </Route>
        </div>
      </div>
    </Router>
    </div>
    
  );
  
}

export default App;
