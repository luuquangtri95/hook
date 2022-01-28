import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import TodoRenderList from "./pages/TodoRenderList";
import TodoDetail from "./pages/TodoDetail";
import NotFound from "../NotFound";

TodoList2.propTypes = {};

function TodoList2(props) {
  const match = useRouteMatch();

  return (
    <div>
      <h1>Todo share</h1>
      <Switch>
        <Route path={match.path} component={TodoRenderList} exact />
        <Route path={`${match.path}/:todoId`} component={TodoDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoList2;
