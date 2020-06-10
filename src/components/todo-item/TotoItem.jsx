import React from "react";
import PropTypes from "prop-types";

const TotoItem = ({ todo, markComplete }) => {
  const getStyle = () => {
    return {
      background: "#fafafa",
      padding: "10px",
      margin: "10px 0",
      border: "1px dotted #ccc",
      textDecoration: todo.completed ? "line-through" : "none",
    };
  };
  return (
    <div style={getStyle()}>
      <p>
        <input type="checkbox" onClick={() => markComplete(todo.id)} />
        {todo.title}
      </p>
    </div>
  );
};

//PropType
TotoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TotoItem;
