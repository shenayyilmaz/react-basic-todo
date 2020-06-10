import React, { Component } from "react";
import TodoItem from "../todo-item/TotoItem";
import PropTypes from "prop-types";

export class Todos extends Component {
  render() {
    const { todos, markComplete } = this.props;
    return (
      <div>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} markComplete={markComplete} />
        ))}
      </div>
    );
  }
}

//PropType
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};
export default Todos;
