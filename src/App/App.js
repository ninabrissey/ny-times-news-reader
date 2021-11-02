import { getData } from '../utils/apiCalls';
import { useEffect } from 'react';
import Nav from '../Nav/Nav';
// import { Route, Switch } from 'react-router-dom';

// export REACT_APP_NY_TIMES_KEY=VUy19Fl88GH7UARSGbrbazb9U2MqOVdj

// export REACT_APP_NY_TIMES_SECRET_KEY=3v8z4iufN9khu4HC

function App() {
  useEffect(() => {
    getData('home', `api-key=VUy19Fl88GH7UARSGbrbazb9U2MqOVdj`);
  }, []);

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
