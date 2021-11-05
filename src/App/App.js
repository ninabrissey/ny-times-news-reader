import Nav from '../Nav/Nav';
import { Route, Switch } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import SingleArticle from '../SingleArticle/SingleArticle';

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
          path="/:section/:id"
          render={({ match }) => (
            <SingleArticle
              section={match.params.section}
              id={match.params.id}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
