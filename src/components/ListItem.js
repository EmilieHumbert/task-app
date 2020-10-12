import React, { Component } from "react";

export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      input: props.item.task,
    };
  }

  handleEditClick = () => {
    this.setState({ ...this.state, edit: true });
  };

  handleInputChange = (event) => {
    this.setState({ ...this.state, input: event.target.value });
  };

  handleFormReset = () => {
    this.setState({ ...this.state, edit: false, input: this.props.item.task });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.edit(this.props.item.id, "task", this.state.input);
    this.setState({ ...this.state, edit: false });
  };

  render() {
    const { id, task } = this.props.item;

    return (
      <li className="list-group-item row">
        {this.state.edit ? (
          <form
            className="d-flex align-items-center"
            onReset={this.handleFormReset}
            onSubmit={this.handleFormSubmit}
          >
            <input
              className="form-control flex-grow-1"
              onChange={this.handleInputChange}
              type="text"
              value={this.state.input}
            ></input>
            <button className="btn btn-outline-success ml-1" type="submit">
              Save
            </button>
            <button className="btn btn-outline-danger ml-1" type="reset">
              Reset
            </button>
          </form>
        ) : (
          <div className="d-flex align-items-center">
            <span className="flex-grow-1">
              {id}. {task}
            </span>
            <button
              className="btn btn-outline-primary ml-1"
              onClick={this.handleEditClick}
              type="button"
            >
              Edit
            </button>
            <button
              className="btn btn-outline-danger ml-1"
              onClick={() => this.props.delete(id)}
              type="button"
            >
              Delete
            </button>
          </div>
        )}
      </li>
    );
  }
}
