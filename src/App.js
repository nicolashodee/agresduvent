import logo from './logo.svg';
import NavBar from './components/Navbar';
import './App.css';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <Section/>
      </header>
    </div>
  );
}

export default App;
