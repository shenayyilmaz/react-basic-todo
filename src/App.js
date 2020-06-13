import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Todos from "./components/todos/Todos";
import Header from "./components/header/Header";
import AddTodo from "./components/add-todo/AddTodo";
import About from "./pages/about/About";
import "./App.css";

// hooks
import UseStateExample from "./components/hooks/UseStateExample";
import UseEffectExample from "./components/hooks/UseEffectExample";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    this.setState({ todos: res.data });

    //SIMULTANEOUS DATA
    const res1 = await axios.all([
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
    ]);
    console.log("todos", res1[0]);
  };
  // Toggle Complete
  markComplete = async (id) => {
    // const res = await axios.patch(
    //   `https://jsonplaceholder.typicode.com/todos/${id}`,
    //   {
    //     completed: true,
    //   }
    // );

    const todos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos });
  };

  //Dlete TODO
  deleteTodo = async (id) => {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  };

  //Add Todo
  addTodo = async (title) => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false,
    });
    console.log("ress", res.data);
    //id kendim uzerine yaziyorum cunku get res.data.id=201 herzaman 201 veriyo key error onlemek icin
    const todos = [
      ...this.state.todos,
      { ...res.data, id: this.state.todos.length + 1 },
    ];
    this.setState({ todos });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <h1>APP component</h1>
          {/* <UseStateExample /> */}
          <UseEffectExample />
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
