import React, { useEffect } from 'react'
import { Container, ListGroup, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, listTasks } from '../actions/taskActions'
import Message from '../components/Message'
import Task from '../components/Task'
import Loader from './../components/Loader.js'


const HomeScreen = ({ history }) => {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const redirect = '/login'

    const dispatch = useDispatch()
    useEffect(() => {
      if (!userInfo) {
        history.push(redirect)
    }
    }, [history, userInfo, redirect,dispatch])

    
    const { loading , tasks }= useSelector((state)=> state.taskList)

    const taskDelete = useSelector((state) => state.taskDelete)
      const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
      } = taskDelete

    useEffect(() => {

        if(userInfo)
        {
            dispatch(listTasks())
        }
    }, [dispatch,userInfo,successDelete])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteTask(id))
        }
    }

    return (
        <>
        {loading ? (<Loader/>):
        <Container>
            <Row className="justify-content-md-center">
            <Col md={9} xs={12}>
            <h2>My Tasks</h2>
            {loadingDelete && <Loader />}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
            <ListGroup>
                {
                    tasks.map((task)=>{
                        return <ListGroup.Item key={task._id}> <Task task={task} deleteHandler={deleteHandler}/> </ListGroup.Item>
                    })
                }
            </ListGroup>
            </Col>
            </Row>
        </Container>
        }
        </>
    )
}

export default HomeScreen
