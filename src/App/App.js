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
          path="/:section/:short_url"
          render={({ match }) => (
            <SingleArticle
              section={match.params.section}
              short_url={match.params.short_url}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
