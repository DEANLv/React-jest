import logo from './logo.svg';
import './App.css';
import {word} from './01/Math.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{word}</h1>
      </header>
    </div>
  );
}

export default App;
