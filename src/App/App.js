import Nav from '../Nav/Nav';
import { Route, Switch } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <CardContainer section="home" />
        </Route>
        <Route
          exact
          path="/:section"
          render={({ match }) => (
            <CardContainer section={match.params.section} />
          )}
        />
        <Route
          exact
          path="/:section/:title"
          render={({ match }) => (
            <CardContainer
              section={match.params.section}
              title={match.params.title}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
