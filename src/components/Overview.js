import React, { Component } from "react";

export default class Overview extends Component {
  render() {
    return (
      <ul className="list-group ">
        {this.props.list.map(({ id, task }) => (
          <div key={id} className="container">
            <li className="list-group-item row">
              {id}. {task}
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => this.props.delete(id)}
                style={{ float: "right" }}
                type="button"
              >
                Delete
              </button>
            </li>
          </div>
        ))}
      </ul>
    );
  }
}
