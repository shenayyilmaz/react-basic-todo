import React, { Component } from "react";
import TodoItem from "../todo-item/TodoItem";
import PropTypes from "prop-types";

export class Todos extends Component {
  render() {
    const { todos, markComplete, deleteTodo } = this.props;
    return (
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            markComplete={markComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    );
  }
}

//PropType
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
export default Todos;
