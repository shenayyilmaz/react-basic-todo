import React, { Component } from "react";
import Todos from "./components/todos/Todos";
import Header from "./components/header/Header";
import AddTodo from "./components/add-todo/AddTodo";
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

  //Dlete TODO
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  };

  //Add Todo
  addTodo = (title) => {
    const todos = [
      ...this.state.todos,
      { id: this.state.todos.length + 1, title, completed: false },
    ];
    this.setState({ todos });
  };
  render() {
    return (
      <div className="App">
        <h1>APP component</h1>
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}
export default App;
