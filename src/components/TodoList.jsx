import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit} = this.props
        return (
            <ul className="list-group my-5">
                <h3 className="text-center text-capitalize">To-do List</h3>
                {items.map(a => {
                    return (
                        <TodoItem key={a.id} title={a.item} handleDelete={() => handleDelete(a.id)} handleEdit={() => handleEdit(a.id)}/>
                    )
                })}
                <button type="button" onClick={clearList} className="btn btn-danger btn-block text-capitalize mt-5">clear list</button>
            </ul>
        )
    }
}
