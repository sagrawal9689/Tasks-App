import React from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const Task = ({ task ,deleteHandler}) => {
    const history = useHistory();
    const editHandler=(taskId)=>{
        history.push(`/updateTask?taskId=${taskId}`)
    }

    return (
        <Container>
            <Row>
                <Col md={9} xs={12}>
                <span>{task.description}</span>
                </Col>
                <Col md={3} xs={12}>
                <Button className="mx-1" onClick={()=> editHandler(task._id)}>Edit</Button>
                <Button className="mx-1" onClick={()=>deleteHandler(task._id)}>Delete</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Task
