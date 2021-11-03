import Nav from '../Nav/Nav';
import { Route, Switch } from 'react-router-dom';
import Container from '../Container/Container';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Container section="home" />
        </Route>
        <Route
          exact
          path="/:section"
          render={({ match }) => <Container section={match.params.section} />}
        />
      </Switch>
    </div>
  );
}

export default App;
