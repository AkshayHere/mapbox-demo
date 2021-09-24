import 'css/App.css';
import 'css/Router.scss';

import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Loading from './components/Loading';

const App = (
  lazy(() => (
    import('./App.js')
  ))
)

function NoMatch() {
  let location = useLocation();
  return (
    <div className="rings">
      <Loading type={"Rings"} />
      <h3>
        Guess you hit a roadblock trying to reach <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<Loading type={"GooLoader"} />}>
          <Switch>
            <Route exact path={"/"} >
              <App />
            </Route>
            <Route path={'*'}>
              <NoMatch />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default Router;
