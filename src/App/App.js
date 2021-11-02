import { getData } from '../utils/apiCalls';
import { useEffect } from 'react';
import './App.css';

// export REACT_APP_NY_TIMES_KEY=VUy19Fl88GH7UARSGbrbazb9U2MqOVdj

// export REACT_APP_NY_TIMES_SECRET_KEY=3v8z4iufN9khu4HC

function App() {
  useEffect(() => {
    getData('arts', `VUy19Fl88GH7UARSGbrbazb9U2MqOVdj=3v8z4iufN9khu4HC`);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
