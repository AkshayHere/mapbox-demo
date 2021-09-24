import 'css/App.css';
import Loading from 'components/Loading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loading type={"MutatingDots"}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.mapbox.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create Map using Mapbox
        </a>
      </header>
    </div>
  );
}

export default App;
