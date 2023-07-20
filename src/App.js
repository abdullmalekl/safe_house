import logo from './logo.svg';
import AppLogo from './Basic_pages/nlogo';
import './App.css';
import Navbar from './Bars/navBar';


function App() {
  return (
    <div className="App">
      <AppLogo />
      <Navbar />
      {/* <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
      </header> */}
    </div>
  );
}

export default App;
