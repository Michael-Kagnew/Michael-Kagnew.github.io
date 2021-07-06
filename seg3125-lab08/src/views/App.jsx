import '../css/App.css';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';

function App() {

  return (      

    <div className="App">
      <NavBar/>
      <div className="content">
        <Home/>
      </div>
      <Footer/>
    </div>
  );
  
}

export default App;
