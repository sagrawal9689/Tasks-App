import React, { useEffect } from 'react'
import { Container, ListGroup, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listTasks } from '../actions/taskActions'
import Task from '../components/Task'


const HomeScreen = ({ history }) => {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const redirect = '/login'

    useEffect(() => {
      if (!userInfo) {
        history.push(redirect)
      }
    }, [history, userInfo, redirect])

    const dispatch = useDispatch()

    dispatch(listTasks())

    const tasks=[ { description: "learn java" },{ description: "learn java" },{ description: "learn java" },{ description: "learn java" }, ]
    return (
        <Container>
            <Row className="justify-content-md-center">
            <Col md={9} xs={12}>
            <h2>My Tasks</h2>
            <ListGroup>
                {
                    tasks.map((task)=>{
                        return <ListGroup.Item> <Task task={task}/> </ListGroup.Item>
                    })
                }
            </ListGroup>
            </Col>
            </Row>
        </Container>
    )
}

export default HomeScreen
