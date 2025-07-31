import './App.css';
import About from './components/About';
import Alert from './components/Alert';
  import Navbar from './components/Navbar';
  import TextFrom from './components/TextFrom';
  import React, { useState } from 'react';
//  import About from './components/About';


  function App() {

    const [mode, setMode] = useState('light'); // dark mode on and off

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=> {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      },1500);
    }

    const toggleMode = () => {
      if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
       document.title = "TextUtils - Dark Mode";
     // setInterval(() => {
     //   document.title = "TextUtils is Amazing";
     // }, 2000);
     // setInterval(() => {
     //   document.title = "Install TextUtils Now";
     // }, 1500);
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled","success");
         document.title = "TextUtils - Light Mode";
      }
    }

    return (
      <>
        <Navbar title="TexUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
        <TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        </div>   
      </>
    );
  }

  export default App;
