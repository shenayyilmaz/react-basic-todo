import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Submit
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            style={{ flex: 10 }}
            value={this.state.title}
            onChange={this.onChange}
          />
          <button value="AddTodo" className="btn" style={{ flex: "3" }}>
            Add To List{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
