import React, { Component } from "react";

export default class CreateTaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ ...this.state, input: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.create(this.state.input);
    this.setState({ ...this.state, input: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="d-flex align-items-center mb-3">
        <input
          className="form-control flex-grow-1"
          onChange={this.handleInputChange}
          placeholder="Add a task"
          type="text"
          value={this.state.input}
        />
        <button className="btn btn-primary ml-1" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
