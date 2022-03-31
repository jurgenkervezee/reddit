
import './App.css';
import {Switch, Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import Subreddit from './pages/Subreddit'

function App() {
  return (

      <>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route  path="/subreddit/:subreddit_id">
            <Subreddit/>
          </Route>
        </Switch>

      </>
  );
}

export default App;
