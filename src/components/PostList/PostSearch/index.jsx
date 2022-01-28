import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostSearch.propTypes = {
  onSubmit: PropTypes.func,
};

PostSearch.defaultProps = {
  onSubmit: null,
};

function PostSearch({ onSubmit }) {
  const [search, setSearch] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        search: value,
      };

      onSubmit(formValues);
    }, 300);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
}

export default PostSearch;
