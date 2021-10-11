import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Task from '../components/Task'


const HomeScreen = () => {
    const tasks=[ { description: "learn java" },{ description: "learn java" },{ description: "learn java" },{ description: "learn java" }, ]
    return (
        <div>
            <h2>My Tasks</h2>

            <ListGroup>
                {
                    tasks.map((task)=>{
                        return <ListGroup.Item> <Task task={task}/> </ListGroup.Item>
                    })
                }
            </ListGroup>
        </div>
    )
}

export default HomeScreen
