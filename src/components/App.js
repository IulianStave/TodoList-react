// Enter the task in the input box, click on add button to add to the list.
// To remove from the list, click on the todo to be removed.

import React from "react";
// import logo from "./logo.svg";
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";
import Disclaimer from "./Disclaimer";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.inputElement = React.createRef();
    this.state = {
      items: [],
      currentItem: { text: "", key: "" }
    };
  }
  handleInput = e => {
    const currentItem = { text: e.target.value, key: Date.now() };
    this.setState({
      currentItem
    });
  };

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      console.log('Adding new item' +newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
    }
  };
  
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  render() {
    return (
      <div className="container">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem}/>
        <Disclaimer/>
      </div>
    );
  }
}

export default App;
