import React, { Component } from "react";

import ListItem from "./ListItem";

export default class Overview extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.list.map((item) => {
            return (
              <ListItem
                key={item.id}
                item={item}
                delete={this.props.delete}
                edit={this.props.edit}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
