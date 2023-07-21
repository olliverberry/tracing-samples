import logo from './logo.svg';
import './App.css';

function App() {
  const dogs = fetch('http://localhost:8081/api/dogs', { mode: 'cors', method: 'GET', })
                .then(response => response.json());
  fetch('http://localhost:8081/api/dogs', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      id: 23,
      name: 'test',
      weight: 12,
      breed: 'test',
      age: 1,
      color: 'test',
    }),
  }).then(response => {
    console.log(response.status);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
