import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
//import About from './Components/About';
import React, {useState} from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


// import Login from './Components/login';
// import Slevel from './Components/Slevel';

function App() {
  const [Mode, setMode] = useState('light');
  const [btnColor, setBtnColor] = useState('primary');
  const [borderColor, setBorderColor] = useState('black');

  const enabledarkmode = ()=>{
    if (Mode === 'dark'){
        setMode('light')
        document.body.style.backgroundColor = 'white';
        setBtnColor('primary')
        setBorderColor('black')

    }
    else{
        setMode('dark')
        document.body.style.backgroundColor = 'black';
        setBtnColor('secondary')
        setBorderColor('white')
    }
    
}

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextFlex" Mode={Mode} enabledarkmode={enabledarkmode}/>
    <div className="container">
    {/* <Switch>
        <Route exact path="/about">
          <About />
          </Route>
        <Route path="/">
          <Textform heading="Enter the text to analyze" Mode={Mode} btnColor={btnColor} borderColor={borderColor}/>
        </Route>
      </Switch> */}
      <Textform heading="Enter the text to analyze" Mode={Mode} btnColor={btnColor} borderColor={borderColor}/>
    </div>
    
    {/* </Router> */}
    </>
  );
}

export default App;
