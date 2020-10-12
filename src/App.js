import React, { Component } from "react";

import CreateTaskForm from "./components/CreateTaskForm";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [{ task: "beer", id: 1 }],
    };
  }

  handleTaskCreate = (task) => {
    this.setState({
      ...this.state,
      list: [
        ...this.state.list,
        { task, id: this.state.list.length + 1 },
      ],
    });
  };

  handleTaskDelete = (idToRemove) => {
    const updatedList = this.state.list.filter(({ id }) => id !== idToRemove);
    this.setState({ ...this.state, list: updatedList });
  };

  handleTaskUpdate = (id, field, value) => {
    this.setState({
      ...this.state,
      list: this.state.list.map((listItem) =>
        listItem.id === id ? { ...listItem, [field]: value } : listItem
      ),
    });
  };

  render() {
    return (
      <div className="col-6 mx-auto mt-5">
        <CreateTaskForm create={this.handleTaskCreate} />
        <Overview
          list={this.state.list}
          delete={this.handleTaskDelete}
          edit={this.handleTaskUpdate}
        />
      </div>
    );
  }
}

export default App;
