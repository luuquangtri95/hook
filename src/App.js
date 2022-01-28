import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.scss";
import BetterClock from "./components/BetterClock";
import Clock from "./components/Clock";
import Count from "./components/Count";
import MagicBox from "./components/MagicBox";
import NotFound from "./components/NotFound";
import TodoList from "./components/TodoList";
import TodoList2 from "./components/TodoList2";

function App() {
  const [hide, setHide] = useState(true);

  return (
    <div className="App">
      <h1>Header</h1>

      <Link to="/todos">Todos</Link>
      <br />
      <Link to="/count">Count</Link>

      <Switch>
        <Route path="/todos" component={TodoList2} />
        <Route path="/count" component={Count} exact />
        <Route component={NotFound} />
      </Switch>

      <h1>Footer</h1>
    </div>
  );
}

export default App;
