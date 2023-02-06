import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="data:image/png;base64,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" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hej haubart
        </a>
      </header>
    </div>
  );
}

export default App;
