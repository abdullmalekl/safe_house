import logo from './logo.svg';
import AppLogo from './Basic_pages/nlogo';
import './App.css';
import Navbar from './Bars/navBar';


function App() {
  return (
    <div className="App">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta thhp-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </head>
      <AppLogo />
      <Navbar />
      {/* <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
      </header> */}
    </div>
  );
}

export default App;
