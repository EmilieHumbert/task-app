import React from "react";

export default class Overview extends React.Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.list.map(({ id, task }) => (
          <li className="list-group-item" key={id}>
            {id}. {task}
          </li>
        ))}
      </ul>
    );
  }
}
