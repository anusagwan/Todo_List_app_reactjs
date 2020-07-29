import React, { Component } from 'react';
import TodoListInput from './components/TodoListInput'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./components/FontAwesome"
// import uuid from 'uuid'
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: this.state.id,
      item: this.state.item
    }
    console.log(newItem,"newItem")
    // as state is mutuable in react we cannot use items here , using push we will get the new items with old values in the array , so we are using spread operator
    const updatedItems = [...this.state.items, newItem]
    console.log(updatedItems,'updatedItems')
    this.setState({
      items: updatedItems,
      item: '',
      id:uuidv4(),
      editItem: false
    })
  }
  clearList = () => {
    this.setState({items: []})
  }
  handleDelete = (id) => {
    const filteredItem = this.state.items.filter(a => a.id !== id)
    this.setState({
      items: filteredItem
    })
  }
  handleEdit = (id) => {
    const filteredItem = this.state.items.filter(a => a.id !== id)
    const seletedItem = this.state.items.find(a => a.id === id)
    console.log(seletedItem,"ananan")
    this.setState({
      items: filteredItem,
      item: seletedItem.item,
      editItem: true,
      id:id
    })

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoListInput editItem={this.state.editItem} item={this.state.item} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            <TodoList handleEdit={this.handleEdit} handleDelete={this.handleDelete} items={this.state.items} clearList={this.clearList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
