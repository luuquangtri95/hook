import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newValue = {
      id: Date.now(),
      title: value,
    };

    if (onSubmit) onSubmit(newValue);

    setValue("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={value} onChange={handleChangeValue} />
    </form>
  );
}

export default TodoForm;
