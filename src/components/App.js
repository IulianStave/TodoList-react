// Enter the task in the input box, click on add button to add to the list.
// To remove from the list, click on the todo to be removed.

import React from "react";
// import logo from "./logo.svg";
import TodoList from './TodoList';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
