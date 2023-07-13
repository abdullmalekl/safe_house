import logo from './logo.svg';
import AppLogo from './Basic_pages/logo';
import './App.css';
import Navbar from './Bars/navBar';


function App() {
  return (
    <div className="App">
      <AppLogo />
      <header className="App-header">
        
      <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
