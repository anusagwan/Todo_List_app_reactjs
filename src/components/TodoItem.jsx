import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class TodoItem extends Component {
    render() {
        const {title,handleDelete,handleEdit} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success">
                        <FontAwesomeIcon icon="pen" onClick={handleEdit}  style={{cursor: 'pointer'}}/>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <FontAwesomeIcon icon="trash" style={{cursor: 'pointer'}}/>
                    </span>
                </div>
            </li>
        )
    }
}
