import React from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap'

const Task = ({ task }) => {
    return (
        <Container>
            <Row>
                <Col md={9} xs={12}>
                <span>{task.description}</span>
                </Col>
                <Col md={3} xs={12}>
                <Button className="mx-1">Edit</Button>
                <Button className="mx-1">Delete</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Task
