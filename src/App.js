import React, { Component } from "react";

import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      list: [{ task: "beer", id: 1 }],
    };
  }

  handleInputChange = (event) => {
    this.setState({ ...this.state, input: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      list: [
        ...this.state.list,
        { task: this.state.input, id: this.state.list.length + 1 },
      ],
    });
  };

  handleDelete = (idToRemove) => {
    const updatedList = this.state.list.filter(({ id }) => id !== idToRemove);
    this.setState({ ...this.state, list: updatedList });
  };

  render() {
    return (
      <div className="col-6 mx-auto mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="taskInput">Enter task</label>
            <input
              className="form-control"
              onChange={this.handleInputChange}
              type="text"
              value={this.state.input}
            ></input>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
        <Overview
          list={this.state.list}
          delete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
