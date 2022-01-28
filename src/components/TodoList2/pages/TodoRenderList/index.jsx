import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import TestRender from "../../components/testRender";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
TodoRenderList.propTypes = {};

function TodoRenderList(props) {
  const initTodoList = [
    { id: 1, name: "tri 0", status: "new" },
    { id: 2, name: "tri 1", status: "new" },
    { id: 3, name: "tri 2", status: "completed" },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return (
      params.status ||
      history.push({
        pathname: match.path,
        search: queryString.stringify({ status: "all" }),
      })
    );
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || "all");
  }, [location.search]);

  const handleTodoChangeStatus = (todo, index) => {
    const newTodoList = [...todoList];

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "completed" ? "new" : "completed",
    };

    setTodoList(newTodoList);
  };

  const handleShowAll = () => {
    history.push({
      pathname: match.path,
      search: queryString.stringify({ status: "all" }),
    });
  };
  const handleShowNew = () => {
    history.push({
      pathname: match.path,
      search: queryString.stringify({ status: "new" }),
    });
  };
  const handleShowCompleted = () => {
    history.push({
      pathname: match.path,
      search: queryString.stringify({ status: "completed" }),
    });
  };

  const renderList = useMemo(() => {
    return todoList.filter(
      (x) => filterStatus === "all" || x.status === filterStatus
    );
  }, [todoList, filterStatus]);

  return (
    <div>
      <TestRender todoList={renderList} onTodoClick={handleTodoChangeStatus} />

      <button onClick={handleShowAll}>Show All</button>
      <button onClick={handleShowNew}>Show New</button>
      <button onClick={handleShowCompleted}>Show Completed</button>
    </div>
  );
}

export default TodoRenderList;
