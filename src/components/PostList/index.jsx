import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import PostListRender from "./PostListRender";
import queryString from "query-string";
import PostSearch from "./PostSearch";

function PostList(props) {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const responseData = await fetch(requestUrl);
        const { data, pagination } = await responseData.json();

        setPostList(data);
        setPagination({ ...pagination });
      } catch (error) {
        console.log("fetch to failed", error.message);
      }
    })();
  }, [filters]);

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      _page: newPage,
    });
  };

  const handleSearchForm = (newFilter) => {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilter.search,
    });
  };
  return (
    <div>
      <PostSearch onSubmit={handleSearchForm} />
      <PostListRender postList={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default PostList;
