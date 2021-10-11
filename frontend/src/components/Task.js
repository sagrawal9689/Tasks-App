import React from 'react'
import { Button } from 'react-bootstrap'

const Task = ({ task }) => {
    return (
        <div className="task-container">
            <span>{task.description}</span>

            <div>
            <Button className="mx-3">Edit</Button>
            <Button className="mx-3">Delete</Button>
            </div>
        </div>
    )
}

export default Task
