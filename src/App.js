import React, { Component } from "react";
import Todos from "./components/todos/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: " title to do 1", completed: false },
      { id: 2, title: " title to do 2", completed: false },
      { id: 3, title: " title to do 3", completed: false },
    ],
  };

  // Toggle Complete
  markComplete = (id) => {
    const todos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  };
  render() {
    return (
      <div className="App">
        <h1>APP component</h1>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}
export default App;
