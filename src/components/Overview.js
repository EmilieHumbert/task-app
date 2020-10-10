import React from "react";

export default class Overview extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
