import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class TodoListInput extends Component {
    render() {
        const { item,editItem, handleChange,handleSubmit } = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <FontAwesomeIcon icon="book" />
                            </div>
                        </div>
                        <input value={item} onChange={handleChange} type="text" className="form-control text-capitalize" placeholder="add a to-do item"></input>
                    </div>
                    <button type="submit" className={editItem ? "btn btn-success btn-block text-capitalize mt-3":   "btn btn-primary btn-block text-capitalize mt-3"}>{editItem ? 'edit item' : 'add item'}</button>
                </form>
            </div>
        )
    }
}
